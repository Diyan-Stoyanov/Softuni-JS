import {html , render } from './node_modules/lit-html/lit-html.js';
import {cats} from './catSeeder.js'

const template = (cat) => html`
<li>
     <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
         <div class="info">
             <button @click=${onClick} class="showBtn">Show status code</button>
                 <div class="status" style="display: none" id="${cat.id}">
                     <h4>Status Code: ${cat.statusCode}</h4>
                     <p>${cat.statusMessage}</p>
                 </div>
        </div>
 </li>
`
const section = document.getElementById('allCats');
const allCat = html`
<ul> ${cats.map(template)} </ul>
`;

function onClick(e){
    e.preventDefault();
    const id = e.target.nextElementSibling.id;
    const div = document.getElementById(id);
    if(div.style.display == 'none'){
        const btn = div.previousElementSibling
        btn.textContent = 'Hide status code'
        div.style.display = 'block';
    }else{
        const btn = div.previousElementSibling
        div.style.display = 'none'
        btn.textContent = 'Show status code'
    }
    
}
render(allCat,section)