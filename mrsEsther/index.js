// var txt1 = document.querySelector('#txt1').value
// var txt2 = document.querySelector('#txt2').value
// var btn1 = document.querySelector('.btn1')
// var p = document.getElementById("text")
// var txt3  = document.getElementById("txt3").value
// var text;


// function Result(){
//     text = txt1 * txt2;
//    txt3 = text
// }

function calc(){

    const amount = document.getElementById('amount')
    const quantity = document.getElementById('quantity')
    const total =document.getElementById('total')
    total.value = amount.value * quantity.value
}