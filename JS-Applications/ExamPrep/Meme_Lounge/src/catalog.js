import {html , render} from '../node_modules/lit-html/lit-html.js';
import { getAllMemes } from './data.js';

const catalogTemplate = (list) => html `
<section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
				${list == {} ? html `<p class="no-memes">No memes in database.</p>` 
                : list.map(m => html `<div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${m.title}</p>
                            <img class="meme-image" alt="meme-img" src="${m.imageUrl}">
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/details/${m._id}">Details</a>
                        </div>
                    </div>
                </div>`)}
                
			</div>
        </section>`;
        
   

export async function catalogPage(context){
    const data = await getAllMemes();
    context.render(catalogTemplate(data))
    context.setUserNav();

    
}