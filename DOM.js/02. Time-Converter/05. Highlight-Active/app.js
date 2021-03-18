function focus() {
    let input = document.querySelectorAll('input');
    for(let line of input){
        line.addEventListener('focus',onFocus);
        line.addEventListener('blur', onBlur);
    }
    

    function onFocus(event){
        console.log(event.target);
        event.target.parentNode.className = 'focused'
        
    }
    function onBlur(e){
        e.target.parentNode.className = ''
    }

    

}