function solve() {
   let event = document.querySelector('.shopping-cart')
   event.addEventListener('click', onClick);
   let textArea = document.querySelector('textarea');
   let chekBtn = document.querySelector('.checkout')
   chekBtn.addEventListener('click', btn);
   let arr = [];
   let sum = 0;
   function onClick(e) {
      if (e.target.tagName == 'BUTTON' && e.target.className == 'add-product') {
         let name = e.target.parentNode.parentNode.querySelector('.product-title').textContent;
         let price = Number(e.target.parentNode.parentNode.querySelector('.product-line-price').textContent);
         textArea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
         sum += price;
         if (!arr.includes(name)) {
            arr.push(name)
         }

      }
   }
   function btn(e) {
      e.target = textArea.textContent += `You bought ${arr.join(', ')} for ${sum.toFixed(2)}.`
      event.removeEventListener('click',onClick);
      chekBtn.removeEventListener('click',btn)
   }
  
}