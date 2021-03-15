function encodeAndDecodeMessages() {
    let main = document.getElementById('main');
    let [first, second] = main.children;
    let btn = first.lastElementChild;
    let btn2 = second.lastElementChild;
    btn.addEventListener('click',encode);
    btn2.addEventListener('click',decode);
    let text = first.querySelector('textarea');
    let text2 = second.querySelector('textarea');
    let array = [];
    let array2 = [];

    function encode(e){
      let arr = Array.from(text.value);
      for(let line of arr){
         let current = Number(line.charCodeAt()) + 1;
         array.push(String.fromCharCode(current));
      }
      text2.value = array.join('');
      text.value = '';
      
    }

    function decode(e){
        let arr = Array.from(text2.value);
        for(let line of arr){
            let current = Number(line.charCodeAt()) - 1;
            array2.push(String.fromCharCode(current));
        }
        text2.value = array2.join('');
        
    }
    
}