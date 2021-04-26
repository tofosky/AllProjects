
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
let tb = document.querySelector(".tb");
document.getElementById('getApiData').addEventListener('click', getApiData)
function getApiData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) =>res.json())
    .then((data) =>{
        tb.innerHTML = ''
        data.map(function(post){
            tb.innerHTML+=`
            <div class="">
           <td>${post.username}</td>
           <td>${post.name}</td>
           <td>${post.email}</td>
           <td>${post.phone}</td>
           <td>${post.city}</td>
           <td>${post.website}</td>
         </tr> 
             </div>
            ` 
        });
        document.getElementById('output').append = tb
    
    })
}
    

