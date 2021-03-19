function solve() {
  let input = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let res = document.getElementById('result');
  input = input.toLowerCase();
  input = input.split(' ')
  if(convention == 'Pascal Case'){
      input = input.map(x=> x[0].toUpperCase() + x.slice(1).toLowerCase()).join('');
      document.getElementById('result').textContent = input; 
    
  }else if(convention == 'Camel Case'){
    
       input = input.map(x=> x[0].toUpperCase() + x.slice(1).toLowerCase()).join('');
      let text = input[0].toLowerCase() + input.slice(1)
      document.getElementById('result').textContent = text;
    
  }else{
    document.getElementById('result').textContent = 'Error!'
  }
}