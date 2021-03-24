function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let button = document.querySelector('#searchField');
      let body = document.querySelectorAll('tbody tr td');
      for(let line of body){

         line.parentElement.className = '';
      }
      for(let line of body){
         if(line.textContent.includes(button.value)){
            line.parentElement.className = 'select';

         }
      }

      button.value = '';
      

   }
}