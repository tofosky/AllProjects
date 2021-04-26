
let username = document.getElementById("username").value
let password = document.getElementById("password").value
let loginBtn = document.querySelector(".loginBtn")
let getData = JSON.parse(localStorage.getItem("AccountCreated"))
        function login(username,password){
            for(i=0; i<getData.length; i++)
            if(username=== getData[i].username && password=== getData[i].password1){
                alert("looged in")
        window.location.assign('file:///C:/Users/ADEMOLA/Documents/js%20project/emploeeManagement/newDashboard.html')
    } else{
        alert('error')
    }
}
    
       
    

