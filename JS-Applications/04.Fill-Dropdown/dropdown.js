
async function getItem(){
    const url = `http://localhost:3030/jsonstore/advanced/dropdown`;
    const response = await fetch(url);
    const data = await response.json();
    const res = Object.values(data)
    return res;
}
getItem()

async function createItem(city){
    const obj = {
        text: city
    }
    const url = `http://localhost:3030/jsonstore/advanced/dropdown`;
    const response = await fetch(url,{
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(obj)
    });

}

const template = (menu) =>html`
    
    ${menu.map(o => html`<option value="${o._id}">${o.text}</option>`)}

`
const result = await getItem();
let func = template(result);


const select = document.getElementById('menu');
const input = document.getElementById('itemText');
render(func,select);
const btn = document.querySelector('[type="submit"]').addEventListener('click', async(e) =>{
    e.preventDefault();
    getItem();
    createItem(input.value);

    const template = (menu) =>html`
    
    ${menu.map(o => html`<option value="${o._id}">${o.text}</option>`)}

`
const result = await getItem();
let func = template(result);

render(func,select);
input.value = '';
})
