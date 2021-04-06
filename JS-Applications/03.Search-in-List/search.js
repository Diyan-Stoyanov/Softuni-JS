import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';


const article = (towns, match) => html`
<article>
   <div id="towns">
      <ul>
         ${towns.map(t => cities(t, match))}
      </ul>
   </div>
   <input type="text" id="searchText" />
   <button @click=${search}>Search</button>
   <div id="result"></div>
</article>
`;

const cities = (name, match) => html`
<li class=${(match && name.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}>${name}</li>
`;

const body = document.querySelector('body');
update();

function update(match = '') {
   const result = article(towns, match);
   render(result, body)
}

function search(e) {
   const match = e.target.parentNode.querySelector('input').value;
   update(match);

}

