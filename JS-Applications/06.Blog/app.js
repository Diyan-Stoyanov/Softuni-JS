function attachEvents() {
   const viewBtn = document.getElementById('btnViewPost');
    viewBtn.addEventListener('click',view);

   const loadBtn = document.getElementById('btnLoadPosts');
   loadBtn.addEventListener('click',load);

}

attachEvents();
const select = document.getElementById('posts');
const ul = document.getElementById('post-comments');
const h1 = document.getElementById('post-title');
const text = document.getElementById('post-body');


async function load(){
    let url = `http://localhost:3030/jsonstore/blog/posts`;
    const res = await fetch(url);
    const data = await res.json();
    Object.values(data).forEach(el =>{
        let option = document.createElement('option');
        option.setAttribute('value',el.id);
        option.textContent = el.title;
        select.appendChild(option)
    })
}

async function view(){

    let postUrl = `http://localhost:3030/jsonstore/blog/posts/${select.value}`
    const response = await fetch(postUrl);
    const dataPost = await response.json();

    h1.textContent = dataPost.title;
    
    const p = document.createElement('p');
    p.textContent = dataPost.body;
    text.appendChild(p);


    let url = `http://localhost:3030/jsonstore/blog/comments`;
    const res = await fetch(url);
    const data = await res.json();
    
    
    const filtred = Object.values(data).filter(com => com.postId == select.value);
    filtred.forEach(e => {
        let li = document.createElement('li');
        li.setAttribute('id',e.id);
        li.textContent = e.text;
        ul.appendChild(li);
        
        
    })
}