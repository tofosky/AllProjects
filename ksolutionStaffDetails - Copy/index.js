
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
let tb = document.querySelector(".tb");
let getApiDatas = document.getElementById('getApiData');
let btnAdd = document.querySelector('.btnAdd');
let modal = document.querySelector('.modal');
let clos = document.querySelector(".btn-close")
let username = document.querySelector("#username");
let namE = document.querySelector("#names");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let city = document.querySelector("#city");
let website = document.querySelector("#website");
let addUser = document.querySelector("#add");
let saveChanges = document.querySelector("#saveChanges");
let btnClose = document.querySelector('.clos')
let txtSearch = document.querySelector('.txtSearch');
//let arr=[]
//getting data from the local storage
// let GET = JSON.parse(localStorage.getItem('GET'));
// let POST   = JSON.parse(localStorage.getItem('POST'));

 //concats =    GET.concat(POST);
 //gets = localStorage.setItem('concats', JSON.stringify(concats));
 //hmm = JSON.parse(localStorage.getItem('concats'));
 
 


// localStorage.getItem('concats');

//getApiDatas.addEventListener('click', getUsers);

// function getUsers(e){
//     e.preventDefault();
   
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) =>res.json())
//     .then((data) =>{
//         tb.innerHTML = ''
//         data.map(function(datas){
//             tb.innerHTML+=`
//             <div class="">
//             <tr>
//            <td>${datas.username}</td>
//            <td>${datas.name}</td>
//            <td>${datas.email}</td>
//            <td>${datas.phone}</td>
//            <td>${datas.website}</td>
//           </tr> 
//              </div>
//             ` 
//             let getItem = [];
//             getItem.push(data);
//             //localStorage.setItem('GET', JSON.stringify(getItem));
//             //displayDatas()
//         })
//         //document.getElementById('output').append = tb
//     })
// }
let ksolStaff = []

btnAdd.addEventListener('click', (e) =>{
    e.preventDefault();
   if(modal.style.display === "none"){
       modal.style.display = "block";
   }else{
       modal.style.display = 'block';
   }
})

btnClose.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.style.display = 'none'
})

addUser.addEventListener("click", (e) =>{
    e.preventDefault();
    if(username.value!="" && names.value!="" && email.value!="" && phone.value!="" && website.value!=""){
         users = {
            usernamess:                username.value,
            namesss:                names.value,
            emailss:                email.value,
            phoness:                phone.value,
            websitess :             website.value
        }
        ksolStaff.push(users)
        console.log(ksolStaff);
        localStorage.setItem("POST", JSON.stringify(ksolStaff))
        //displayInventory()
        username.value="", names.value = "", email.value = "", phone.value = "" , website.value = ""  
}else{
 alert('failed')      
}
})
       
        

//         displayDatas()
//         function displayDatas(){
//         tb.innerHTML = ""
//        for(i=0;i<POST.length;i++){
//        tb.innerHTML +=`
//            <td>${POST[i].username}</td>
//            <td>${POST[i].name}</td>
//            <td>${POST[i].email}</td>
//            <td>${POST[i].phone}</td>
//            <td>${POST[i].website}</td>
//          </tr> 
//      `
//      document.getElementById('output').append(tb)
//     } 
//    // console.log(displayDatas());
//        }
       
       
             



    


