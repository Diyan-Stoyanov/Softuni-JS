import { html , render} from '../node_modules/lit-html/lit-html.js';
import { createRegister } from './data.js';

const registerTemplate = (onSubmit) =>html`
<section id="register">
            <div class="container">
                <form @submit=${onSubmit} id="register-form">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href="/login">Sign in</a>.
                    </p>
                </div>
            </div>
        </section>`

export async function registerPage(ctx){
    ctx.render(registerTemplate(onSubmit));
    ctx.setUserNav()
    

    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');
        const repeatPass = formData.get('repeatPass');
        if(!username || !password || !repeatPass){
           return alert('All fields are required!')
        }
        if(password != repeatPass){
            return alert('dont matched')
        }
        
        const data = await createRegister({username,password})
        sessionStorage.setItem('userToken',JSON.stringify({username:data.username,token:data.accessToken,id:data._id}))
        ctx.page.redirect('/catalog');

    }
    
}