
let addNew  = document.querySelector(".addNew")
let btnnnn = document.querySelector(".btnnn")
let fname = document.querySelector("#ff").value 
let lname = document.querySelector("#lname").value
let midname = document.querySelector("#midname").value 
// let dept = document.querySelector("#debt").value
let depts = document.querySelector("#dept").value
let dob = document.querySelector("#dob").value
let doe = document.querySelector("#doe").value
let numb = document.querySelector(".numb").value
let saveBtn = document.querySelector(".saveBtn")
let contTable = document.querySelector(".contTable")
let btnAdmin = document.querySelector(".btnAdmin")
let admin_item = document.querySelector(".admin-item")
let staffLength = document.querySelector("#staffLength")
let hiden = document.querySelector("#hiden").value
let tb = document.querySelector(".tb")
let updateBtn = document.querySelector(".updateBtn")
let titleNewUser = document.querySelector(".titleNewUser")
let forms = document.querySelector(".centered")
let centeredEdit = document.querySelector(".centeredEdit")
let closeEdit= document.querySelector(".closeEdit")
let dropdownMenu = document.querySelector(".dropdown-menu")
let dropdownToggle = document.querySelector(".dropdown-toggle") 
let editAdminBtn = document.querySelector(".editadmin")
let pics = document.querySelector("#pics").value
let accountCreated = document.querySelector(".createAccountPage")
let adminHeading = document.querySelector('.adminHeading')
let createAcctBtn = document.querySelector(".createAccountBtn")
let updateAcctBtn = document.querySelector(".updateAccountBtn")
let tableTitle = document.querySelector(".tableTitle")

// creating an empty array
let staffData = []

//getting data from the localstorage
staffData = JSON.parse(localStorage.getItem("staffData"))
//getting data from the login page
 getData = JSON.parse(localStorage.getItem("AccountCreated"))
//console.log(getData);
welcomeUser()
function welcomeUser(){
    for(k=0;k<getData.length;k++){
    dropdownToggle.innerHTML = getData[k].username
}
}
dropdownToggle.addEventListener("click", (e) =>{
    e.preventDefault()
    if(dropdownMenu.classList.toggle("dropdown-menu")){
        dropdownMenu.style.display = "block"

    }else{dropdownMenu.style.display = "none"}
})
     addNew.addEventListener("click", newStaff)
         function newStaff(){
        if(staff.classList.toggle('centered')){
            staff.style.display = 'block';
        }else{
            staff.style.display = 'block';
        }  
    }
    
       function newStaffs(fname,lname,midname,dept,dob,numb,doe,pics){
         
       if(fname!="" || lname!="" || midname!="" || dept!="" || dob!="" ||numb!="" ||doe!="" || pics!=""){
             staffObj = {
                 firstName: fname,
                 lastName:lname,
                 midleName:midname,
                 department:dept,
                 dateofBirth:dob,
                 number:numb,
                 dateofEmployement:doe ,
                 Image:pics 
             }
             staffData.push(staffObj)
             localStorage.setItem( "staffData",JSON.stringify(staffData))
             alert("saved successfully")
            showData()
       }else{
           alert('all fields are required')
       }
    }
    
    function showData(){
       tb.innerHTML = ""
       for(i=0;i<staffData.length;i++){
        tb.innerHTML +=`
           
             <th scope="row">${i+1}</th>
              <td><img src=${staffData[i].Image} style='width:50px; height:7opx'></td>
              <td>${staffData[i].firstName}</td>
              <td>${staffData[i].lastName}</td>
              <td>${staffData[i].midleName}</td>
              <td>${staffData[i].department}</td>
              <td>${staffData[i].dateofBirth}</td>
              <td>${staffData[i].dateofEmployement}</td>
              <td>${staffData[i].number}</td>
              <td><span><input type="button" class="btn btn-warning" value="EDIT" onclick='editStaff(${i})'><input type="button"  class="btn btn-danger" value="DELETE" onclick="remove(${i})"></span></td>
            </tr> 
        `
        contTable.append(tb)  
       } 
           
      
    }
    showData()

    function editStaff(indexes){
        confirmation = confirm("edit selected item?")
       
        if(confirmation == true){
            forms.style.display = "block"
            contTable.style.display = "none"
            tableTitle.style.display = "none"
            updateBtn.style.display = "block"
            saveBtn.style.display = "none"
            titleNewUser.innerHTML = "Edit Staff"
           staffs = staffData[indexes]
           document.querySelector("#ff").value = staffs.firstName,document.querySelector("#lname").value = staffs.lastName,document.querySelector("#midname").value = staffs.midleName,document.querySelector("#dept").value = staffs.department,document.querySelector("#dob").value= staffs.dateofBirth,document.querySelector("#doe").value = staffs.dateofEmployement,document.querySelector("#numb").value = staffs.number,
           document.querySelector("#pics").value = staffs.Image
           document.getElementById("hiden").value = indexes
           
    }else{
        return editStaff()
    }
}
 
// closeEdit
closeEdit.addEventListener("click", (e)=>{
        e.preventDefault()
        centeredEdit.style.display = "none"
})
   

    function remove(indexes){
        confirmed = confirm('delete selected item?')
        if(confirmed == true){
            staffData.splice(indexes,1)
            localStorage.setItem('staffData', JSON.stringify(staffData))
            showData()
        }
    }

    
//Update Staff
function updateStaff(){
    i = document.getElementById("hiden").value
    staffObj = {
        firstName: document.querySelector(".fname").value,
        lastName:document.querySelector(".lname").value,
        midleName:document.querySelector(".midname").value,
        department:document.querySelector(".dept").value,
        dateofBirth:document.querySelector(".dob").value,
        number:document.querySelector(".numb").value,
        dateofEmployement:document.querySelector(".doe").value  
    }
    staffData[i] = staffObj
   localStorage.setItem( "staffData",JSON.stringify(staffData))
   forms.style.display ="none"
   contTable.style.display = "block"
    showData()
    alert("updated successfully")
}


   
    function editAdmin(k){
        for(k=0;k<getData.length;k++){
        accountCreated.style.display = 'block'
        adminHeading.innerHTML = "Update Admin"
        createAcctBtn.style.display = "none"
        pss = getData[k]
        document.querySelector(".fullname").value = pss.fullname,
        document.querySelector(".email").value = pss.email,
        document.querySelector(".username").value = pss.username,
        document.querySelector(".password1").value = pss.password1
        document.querySelector(".password2").value = pss.password2
        document.getElementById("hiden").value = k
    }
    }

    function updateAdmin(){
        position = document.getElementById("hiden").value;
        userObj = {
            fullname :  document.querySelector(".fullname").value,
            email    :  document.querySelector(".email").value,
            username : document.querySelector(".username").value,
            password1: document.querySelector(".password1").value,
            password2: document.querySelector(".password2").value ,
        }
        getData[position] = userObj;
        localStorage.setItem("AccountCreated",JSON.stringify(getData))
        alert("updated successfully");
        window.location.assign('file:///C:/Users/ADEMOLA/Documents/js%20project/emploeeManagement/index.html')
    }
   

     
    
  
       
        