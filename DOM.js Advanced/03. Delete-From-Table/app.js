function deleteByEmail() {
    let input = document.querySelector('input');
    let table = Array.from(document.querySelectorAll('tbody tr td'));
    let res = document.getElementById('result');

     for(let i = 1 ; i < table.length; i+=2 ){
         
         if(input.value == table[i].textContent.trim()){
            table[i].parentNode.remove()
            res.textContent = 'Deleted'
         }else{
             res.textContent = 'Not found.'
         }
     }
    
}