import { html,render} from '../node_modules/lit-html/lit-html.js';
import { del, detailsCar} from './data.js';

const detailsTemplate = (id,onClick,isTrue) =>html`
  <section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src="${id.imageUrl}">
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${id.brand}</li>
                    <li><span>Model:</span>${id.model}</li>
                    <li><span>Year:</span>${id.year}</li>
                    <li><span>Price:</span>${id.price}$</li>
                </ul>

                <p class="description-para">${id.description}</p>
                ${isTrue ? html` <div class="listings-buttons">
                    <a href="/edit/${id._id}" class="button-list">Edit</a>
                    <a @click=${onClick} href="#" class="button-list">Delete</a>
                </div>` : ''}
               
            </div>
        </section>`


export async function detailsPage(ctx){
    let isTrue = false;

    let id = ctx.params.id;
    
    const data = await detailsCar(id);
    
    const user = JSON.parse(sessionStorage.getItem('userToken'));
    
    if(user != null){
        const ownerId = data._ownerId;
        const userId = user.id
        if(ownerId == userId){
            isTrue = true;
        }
    }


    ctx.render(detailsTemplate(data,onClick,isTrue))

    async function onClick(e){
        e.preventDefault();
        const token = user.token;
        await del(id,token);
        ctx.page.redirect('/catalog')

    }
    
}