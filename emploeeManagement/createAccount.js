let fullName = document.querySelector(".fullname").value
let Email = document.querySelector(".email").value
let userName = document.querySelector(".username").value
let Password1 = document.querySelector(".password1").value
let Password2 = document.querySelector(".password2").value
let loginBtn = document.querySelector(".loginBtn")
//let createAccountBtn = document.querySelector(".createAccountBtn")
 let myDataBase = []
 let getData = JSON.parse(localStorage.getItem("AccountCreated"))
 //console.log(getData);
 function createAccountBtns(fullName,Email,userName,Password1,Password2){
   if(fullName!="" && Email!="" && userName!="" && Password1 === Password2){ 
        userObj = {
            fullname : fullName,
            email    : Email,
            username : userName,
            password1: Password1,
            password2: Password2 ,
        }
        myDataBase.push(userObj)
        localStorage.setItem("AccountCreated",JSON.stringify(myDataBase))
        alert("account created ")
        window.location.assign('file:///C:/Users/ADEMOLA/Documents/js%20project/emploeeManagement/index.html')
    } else{
        alert("all fields are required")
    }
 }

 loginBtn.addEventListener("click", (e)=>{
      e.preventDefault()
      window.location.assign('file:///C:/Users/ADEMOLA/Documents/js%20project/emploeeManagement/index.html')
 })