function solve() {
   const input = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const textAr = document.getElementById('content');
   const btn = document.querySelector('button');
   btn.addEventListener('click', create);

   function create(e) {
      e.preventDefault();
      const article = document.createElement('article');
      const h1 = document.createElement('h1');
      h1.textContent = title.value;
      const p = document.createElement('p');
      p.textContent = 'Category:'
      const strong = document.createElement('strong');
      strong.textContent = category.value;
      p.appendChild(strong);
      const p2 = document.createElement('p');
      p2.textContent = 'Creator:'
      const strong2 = document.createElement('strong');
      strong2.textContent = input.value;
      p2.appendChild(strong2);
      const pText = document.createElement('p');
      pText.textContent = textAr.value;
      const div = document.createElement('div');
      div.setAttribute('class', 'buttons');
      const btnDelete = document.createElement('button');
      btnDelete.setAttribute('class', 'btn delete');
      btnDelete.textContent = 'Delete'
      btnDelete.addEventListener('click', del);
      const btnArhive = document.createElement('button');
      btnArhive.setAttribute('class', 'btn archive');
      btnArhive.textContent = 'Archive';
      btnArhive.addEventListener('click', arch);
      div.appendChild(btnDelete);
      div.appendChild(btnArhive);

      article.appendChild(h1);
      article.appendChild(p);
      article.appendChild(p2);
      article.appendChild(pText);
      article.appendChild(div);

      const h2 = document.querySelectorAll('section')[1];
      h2.appendChild(article);
      function del(e) {
         article.remove()
      }

      function arch(e) {

         const ol = document.querySelector('ol');
         const li = document.createElement('li');
         li.textContent = h1.textContent;
         ol.appendChild(li);

         const sorted = Array.from(ol.children).sort((a,b)=> a.textContent.localeCompare(b.textContent));
         sorted.forEach(e =>{
            ol.appendChild(e);
         })


         article.remove();


      }
   }
}
