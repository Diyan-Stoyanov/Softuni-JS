function subtract() {
    let first = Number(document.getElementById('firstNumber').value);
    let second = Number(document.getElementById('secondNumber').value);
    let res = first - second;
   
    document.getElementById('result').textContent = res;
console.log(res);
}
