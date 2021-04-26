//image carosel in the home page
var myIndex = 0;
carousel();
function carousel(){
    var i;
    var x = document.getElementsByClassName("mySlides");
    for( i=0;i<x.length;i++){
          x[i].style.display = "none";
    }
    myIndex++;
    if(myIndex > x.length){
        myIndex = 1;
    }
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}
// continueBtn for the admission process in jss1
// selecting the element from the form
// let btnCon = document.querySelector('#btnContinue');
//     btnCon.addEventListener('click', (e) =>{
//         e.preventDefault();
//         alert('im clicked');
//     })
//     console.log(btnContinue);