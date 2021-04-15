import { html , render} from '../node_modules/lit-html/lit-html.js';
import { myMeme } from './data.js';

const myTemplate = (meme,gender,username,email) =>html`
 <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/${gender}.png">
                <div class="user-content">
                    <p>Username: ${username}</p>
                    <p>Email: ${email}</p>
                    <p>My memes count: ${meme.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                ${meme.length == 0 ? html` <p class="no-memes">No memes in database.</p>`:
            meme.map(m=>html`<div class="user-meme">
                    <p class="user-meme-title">${m.title}</p>
                    <img class="userProfileImage" alt="meme-img" src="${m.imageUrl}">
                    <a class="button" href="/details/${m._id}">Details</a>
                </div>`)}
              
            </div>
        </section>`

export async function myPage(context){
    const user = JSON.parse(sessionStorage.getItem('userToken'));
    const userId = user.id;
    const gender = user.gender;
    const username = user.username;
    const email = user.email;
    const data = await myMeme(userId)
    

    context.render(myTemplate(data,gender,username,email))

}