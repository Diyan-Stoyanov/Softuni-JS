function toggle() {
    let div = document.querySelector('#extra');
    let button = document.querySelector('.button');
    console.log(button);
    if(div.style.display == 'none'){
        button.textContent = 'Less'
        div.style.display = 'block';
    }else{
        button.textContent = 'More'
        div.style.display = 'none'
    }
}