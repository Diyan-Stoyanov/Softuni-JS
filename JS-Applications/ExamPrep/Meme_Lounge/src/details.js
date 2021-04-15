import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOneMeme, del } from './data.js';

const detailsTemplate = (meme, isTrue, onClick) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${meme.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
                ${meme.description}
            </p>
            ${isTrue ? html`
            <a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onClick} class="button danger">Delete</button>` : ''}


        </div>
    </div>
</section>`

export async function detailsPage(context) {
    let isTrue = false;
    const user = JSON.parse(sessionStorage.getItem('userToken'))

    const id = context.params.id;
    const data = await getOneMeme(id);
    
    if (user != null) {
        const userId = user.id;
        const ownerId = data._ownerId;

        if (userId == ownerId) {
            isTrue = true;
        }
    }

    async function onClick(e) {
        e.preventDefault();
        const token = user.token; 
        await del(id, token);
        context.page.redirect('/catalog');
    }

    context.render(detailsTemplate(data, isTrue, onClick))

}