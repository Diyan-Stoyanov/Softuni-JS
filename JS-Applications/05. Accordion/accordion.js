async function solution() {
    const selection = document.getElementById('main');

    let url = `http://localhost:3030/jsonstore/advanced/articles/list`;
    const res = await fetch(url);
    const data = await res.json();

    for(let line of data){
    let url2 = ` http://localhost:3030/jsonstore/advanced/articles/details/${line._id}`;
        const response = await fetch(url2);
        const dataId = await response.json();

        let div = e('div', { className: 'accordion' }, '', [
            e('div', { className: 'head' }, '', [
                e('span', {}, `${line.title}`),
                e('button', { className: 'button', id: `${line._id}` }, 'More')
            ]),
            e('div', { className: 'extra' }, '', [
                e('p', {}, `${dataId.content}`)
            ])
        ])
        selection.appendChild(div)
    }
    selection.addEventListener('click',more);



}
function more(e){
    if(e.target.tagName =='BUTTON'){

        if(e.target.textContent == 'More'){
            let parend = e.target.parentNode.parentNode.children[1];
            e.target.textContent = 'Less';
            parend.style.display = 'block';
        }else{
            let parend = e.target.parentNode.parentNode.children[1];
            e.target.textContent = 'More';
            parend.style.display = 'none';
        }

    }
}


function e(type, classList, text, children) {
    let el = document.createElement(type);

    if (classList) {
        for (let classL in classList) {
            el[classL] = classList[classL]
        }

    }

    if (text) {
        el.textContent = text;
        el.value = text
    }

    if (children) {
        children.forEach((c) => el.appendChild(c));
    }

    return el;
}

window.addEventListener('load', () => {
    solution()
})