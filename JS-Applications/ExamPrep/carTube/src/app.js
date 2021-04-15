import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import {createPage  } from './create.js';
import { detailsPage } from './details.js';
import { editPage } from './edit.js';
import { loginPage } from './login.js';
import { myPage } from './myCars.js';
import { registerPage } from './register.js';
import {homePage} from './home.js';
import { catalogPage} from './catalog.js';


const main = document.querySelector('#site-content');

page('/', decorateContext, homePage);
page('/catalog', decorateContext, catalogPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/login', decorateContext, loginPage);
page('/myCars', decorateContext, myPage);
page('/register', decorateContext, registerPage);
page('/create', decorateContext, createPage);


setUserNav()
page.start()




function decorateContext(context, next) {
    context.render = (content) => render(content, main);

    context.setUserNav = setUserNav;
    next()
}

function setUserNav() {
    const user = JSON.parse(sessionStorage.getItem('userToken'));
    if (user != null) {
        const username = user.username
        const a = document.querySelector('#welcomeUs');
        a.textContent = `Welcome ${username}`
        document.querySelector('#profile').style.display = 'block';
        document.querySelector('#guest').style.display = 'none';
    } else {
        document.querySelector('#profile').style.display = 'none';
        document.querySelector('#guest').style.display = 'block';
    }
}

const logoutBtn = document.getElementById('logoutBtn').addEventListener('click', async (e) => {
    e.preventDefault();
    const user = JSON.parse(sessionStorage.getItem('userToken'))
   
    const url = `http://localhost:3030/users/logout`;
    try {
        const response = await fetch(url, {
            method: 'get',
            headers: {'X-Authorization': user.token}
        })
       sessionStorage.removeItem('userToken');
       alert('User logout');
       page.redirect('/')
        

       
    } catch (err) {
        alert(err.message);
        throw err;
    }
    
  

})