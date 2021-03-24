function addItem() {
    let text = document.getElementById('newItemText');
    let val = document.getElementById('newItemValue');
    let option = document.createElement('option');
    let menu = document.getElementById('menu');
    option.textContent = text.value + val.value;
    menu.appendChild(option);
    text.value = '';
    val.value = '';
    
}