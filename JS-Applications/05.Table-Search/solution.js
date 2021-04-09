import { html, render } from '../node_modules/lit-html/lit-html.js';

const setItems = (student, select) => html`
<tr class=${select ? 'select' : '' }>
   <td>${student.firstName} ${student.lastName}</td>
   <td>${student.email}</td>
   <td>${student.course}</td>
</tr>
`
const tbody = document.querySelector('tbody');
const input = document.querySelector('#searchField');
 document.querySelector('#searchBtn').addEventListener('click', (e) => {
    e.preventDefault();
    update(info, input.value);
    document.querySelector('#searchField').value = '';

 });

const url = 'http://localhost:3030/jsonstore/advanced/table';
const response = await fetch(url);
const data = await response.json();
const info = Object.values(data);
update(info);

function update(i, match = "") {
const result = info.map(s => setItems(s, compare(s, match)));
render(result, tbody);
}

function compare(item, match) {
   return Object.values(item).some(v => match && v.toLowerCase().includes(match));
}

