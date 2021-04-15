import { html , render} from '../node_modules/lit-html/lit-html.js';
import {createLogin } from './data.js';

const loginTemplate = (onSubmit) =>html`<section id="login">
<form @submit=${onSubmit} id="login-form">
    <div class="container">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input id="email" placeholder="Enter Email" name="email" type="text">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password">
        <input type="submit" class="registerbtn button" value="Login">
        <div class="container signin">
            <p>Dont have an account?<a href="/register">Sign up</a>.</p>
        </div>
    </div>
</form>
</section>`

export async function loginPage(context){

    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if(!email || !password){
            return alert('All fields are required!')
        }
        const data = await createLogin({email,password});
        
        sessionStorage.setItem('userToken',JSON.stringify({username:data.username,email:data.email,token:data.accessToken,id:data._id,gender:data.gender}));


        context.page.redirect('/catalog');
        context.setUserNav()
    }

    context.render(loginTemplate(onSubmit))
}