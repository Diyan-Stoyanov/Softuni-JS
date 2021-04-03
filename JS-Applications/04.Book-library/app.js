async function createBook(book) {
 
    const url = 'http://localhost:3030/jsonstore/collections/books';
 
    const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });
 
    if (response.ok == false) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    };
};
 
async function updateBook(id, book) {
    const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
 
    const response = await fetch(url, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });
 
    if (response.ok == false) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    };
};
 
async function deleteBook(id) {
    const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
 
    const response = await fetch(url, {
        method: 'delete',
 
    });
 
    if (response.ok == false) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    };
};
 
function start() {
 
    document.querySelector('#loadBooks').addEventListener('click', async () => {
        const url = 'http://localhost:3030/jsonstore/collections/books';
 
        const response = await fetch(url);
 
        if (response.ok == false) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        };
 
        const data = await response.json();
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '';
 
        Object.entries(data).map(([id, books]) => {
            const result = `
                <tr data-id="${id}">
                <td>${books.title}</td>
                <td>${books.author}</td>
                <td>
                    <button class="editBtn">Edit</button>
                    <button class="deleteBtn">Delete</button>
                </td>
            </tr>`
            tbody.innerHTML += result;
 
        });
    })
 
    document.querySelector('#submitForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#input2').value;
        const title = document.querySelector('#input1').value;
 
        const book = {
            author: name,
            title
        }
 
        createBook(book);
 
        document.querySelector('#input2').value = '';
        document.querySelector('#input1').value = '';
 
    });
 
    document.querySelector('table').addEventListener('click', changeForm);
}
 
start()
 
function changeForm(e) {
    if (e.target.className == 'editBtn') {
        document.querySelector('#submitForm').style.display = 'none';
        document.querySelector('#editForm').style.display = 'block';
        const id = e.target.parentNode.parentNode.dataset.id;
 
        const name = document.querySelector('#input4');
        const title = document.querySelector('#input3');
 
        title.value = e.target.parentNode.parentNode.children[0].textContent;
        name.value = e.target.parentNode.parentNode.children[1].textContent;
 
        document.querySelector('#saveBtn').addEventListener('click', async (e) => {
            e.preventDefault();
            const name = document.querySelector('#input4');
            const title = document.querySelector('#input3');
 
            const book = {
                author: name.value,
                title: title.value
            }
 
            updateBook(id, book);
            document.querySelector('#input4').value = '';
            document.querySelector('#input3').value = '';
            document.querySelector('#submitForm').style.display = 'block';
            document.querySelector('#editForm').style.display = 'none';
 
        });
 
    } else if (e.target.className == 'deleteBtn') {
        const id = e.target.parentNode.parentNode.dataset.id;
        deleteBook(id);
    }
}