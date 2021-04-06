import  {html, render} from './node_modules/lit-html/lit-html.js'

const template = (towns) => html`
<ul>
${towns.map(name => html`<li> ${name}</li>`)}
</ul>`

const btn = document.getElementById('btnLoadTowns').addEventListener('click',(e)=>{
    e.preventDefault()
    const div = document.getElementById('root');
    const input = document.getElementById('towns').value;
    const city = input.split(', ');
    const res = template(city);
    render(res,div);
})