let image1 = document.querySelector(".image1")
let span1 = document.querySelector(".span1")
let image2 = document.querySelector(".image2")
let span2 = document.querySelector(".span2")
let image3 = document.querySelector(".image3")
let span3 = document.querySelector(".span3")
let main2 = document.getElementById("main2");

let p = document.getElementById("p");
main2.addEventListener("mouseover",toogle )
      function toogle(i){
        const  spans = document.querySelectorAll(".span")
          if(spans[i].style.display === "block"){
             spans[i].style.display = "none"
          }else{
            spans[i].style.display = "block"
          }
      }
             