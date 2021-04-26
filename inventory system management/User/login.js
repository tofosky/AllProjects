let userUsername = document.querySelector("#userUsername");
let userPassword = document.querySelector("#userPassword");
let errorText = document.querySelector(".errorText");
let loginBtn = document.querySelector(".loginBtn");
let adminData = []
Users = JSON.parse(localStorage.getItem("usersInfo"));
loginBtn.addEventListener("click", (e) =>{
    e.preventDefault();
     for(i=0; i<Users.length;i++){
       if(userUsername.value === Users[i].UserName && userPassword.value === Users[i].Password){
        adminObject = {
            username : userUsername.value,
            password : userPassword.value
        }
        adminData.push(adminObject);
        localStorage.setItem("userDetails", JSON.stringify(adminData))
        alert("login successful")
        window.location.assign('file:///C:/Users/ADEMOLA/Documents/js%20project/inventory%20system%20management/User/User.html')
    }else{
       // errorMessage()
        // alert("access denied")
    }
}

})

console.log("this.",Users);

function errorMessage(){
      errorText.innerHTML = "login failed";
      errorText.style.color = "red";
}