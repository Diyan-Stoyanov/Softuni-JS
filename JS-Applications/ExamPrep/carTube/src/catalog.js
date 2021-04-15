import { html,render} from '../node_modules/lit-html/lit-html.js';
import { getAllCars } from './data.js';

const catalogTemplate = (cars) =>html`
 <section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
                ${cars.length == 0 ? html`<p class="no-cars">No cars in database.</p>` : 
            cars.map(c=> html`<div class="listing">
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

export async function catalogPage(ctx){
    const data = await getAllCars();
    ctx.render(catalogTemplate(data))
    ctx.setUserNav()
    
}