import { html,render} from '../node_modules/lit-html/lit-html.js';
import { myCars } from './data.js';

const myTemplate = (cars) =>html`
<section id="my-listings">
            <h1>My car listings</h1>
            <div class="listings">

                ${cars.length == 0 ? html`<p class="no-cars"> You haven't listed any cars yet.</p>`:
            cars.map(c=>html`<div class="listing">
                    <div class="preview">
                        <img src="${c.imageUrl}">
                    </div>
                    <h2>${c.brand} ${c.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${c.year}</h3>
                            <h3>Price: ${c.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/details/${c._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>`)}
                

                
                
            </div>
        </section>`

export async function myPage(ctx){
    const user = JSON.parse(sessionStorage.getItem('userToken'));
    const userId = user.id;
    const data = await myCars(userId);
    ctx.render(myTemplate(data))
    
}