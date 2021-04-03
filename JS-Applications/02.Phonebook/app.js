function attachEvents() {

    const loadBtn = document.getElementById('btnLoad').addEventListener('click', getPhoneNumbers);
    const createBtn = document.getElementById('btnCreate').addEventListener('click', (e) => {

        const person = document.getElementById('person').value;
        const phone = document.getElementById('phone').value;
        const obj = { person, phone};

        createPhone(obj);

        document.getElementById('person').value = '';
        document.getElementById('phone').value = '';
        getPhoneNumbers()
        
    })




}

attachEvents();

async function getPhoneNumbers() {
    const url = `http://localhost:3030/jsonstore/phonebook`;
    const response = await fetch(url);
    if (response.ok == false) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    let id;
    const ul = document.getElementById('phonebook');
    ul.innerHTML = '';

    Object.values(data).map(el => {
        id = el._id;
        let li = document.createElement('li');
        li.setAttribute('id',`${id}`)
        li.textContent = `${el.person}: ${el.phone}`;
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        li.appendChild(deleteBtn);
        ul.appendChild(li);
        deleteBtn.addEventListener('click', (e) => {

            e.preventDefault();
            if (e.target.tagName == 'BUTTON') {
               const id =  e.target.parentNode.id;
               console.log(id);
                del(id)
            }
            getPhoneNumbers()
        })

    })


}
async function del(id) {
    const url = `http://localhost:3030/jsonstore/phonebook/` + id;

    const res = await fetch(url, {
        method: 'delete'
    });


}

async function createPhone(phone) {
    const url = `http://localhost:3030/jsonstore/phonebook`;

    const res = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(phone)
    })

    if (res.ok == false) {
        const error = await res.json();
        alert(error.message);
        throw new Error(error.message);
    }
}
