function search() {
   let ul = document.querySelector('#towns').children;
   let input = document.querySelector('#searchText');
   let div = document.querySelector('#result');

   count = 0;
   for(let line of Array.from(ul)){

      if(line.textContent.includes(input.value)){
         line.style.fontWeight = 'bold';

         line.style.textDecoration = 'underline'
         count++;
      }
   }
   div.textContent = `${count} matches found`
   
}
