let NavigationBtn = document.querySelector(".btnNav");
let sideBar        = document.querySelector(".sidebar");
let addNew         = document.querySelector(".addNew")
let staff          = document.querySelector(".centered")
let closeBtn       = document.querySelector(".closeBtn")
let btnnnn = document.querySelector(".btnnn")
let fname = document.querySelector(".fname").value
let lname = document.querySelector(".lname").value
let midname = document.querySelector(".midname").value
let dept = document.querySelector(".dept").value
let dob = document.querySelector(".dob").value
let doe = document.querySelector(".doe").value
let numb = document.querySelector(".numb").value
let saveBtn = document.querySelector(".saveBtn")
let updateBtn = document.querySelector("#updateBtn")
let contTable = document.querySelector(".contTable")
let btnAdmin = document.querySelector(".btnAdmin")
let admin_item = document.querySelector(".admin-item")
let staffLength = document.querySelector("#staffLength")
let hiden = document.querySelector("#hiden")

// for welcome user
// btnAdmin = 



let staffData = []
staffData = JSON.parse(localStorage.getItem("staffData"))

//for total number of staffs
let staffsLength = staffData.length
staffLength.innerHTML =  "Total number of staffs:" + staffsLength

    // sidebar function
    NavigationBtn.addEventListener("click", toogle)
     function toogle(e){
         e.preventDefault()
    if(sideBar.style.display == "none"){
        sideBar.style.display = "block";
    }else{
        sideBar.style.display = "none"  
}
     }
// user form
     addNew.addEventListener("click", newStaff)
         function newStaff(){
        if(staff.classList.toggle('centered')){
            staff.style.display = 'block';
        }else{
            staff.style.display = 'block';
        }
            
    }
    // 
    closeBtn.addEventListener("click", (e) =>{
             staff.style.display = "none"
    })

    //saveBtn.addEventListener("click", newStaffs)
   
       function newStaffs(fname,lname,midname,dept,dob,numb,doe){
          // e.preventDefault()
       if(fname!="" || lname!="" || midname!="" || dept!="" || dob!="" ||numb!="" ||doe!=""){
             staffObj = {
                 firstName: fname,
                 lastName:lname,
                 midleName:midname,
                 department:dept,
                 dateofBirth:dob,
                 number:numb,
                 dateofEmployement:doe  
             }
             staffData.push(staffObj)
             localStorage.setItem( "staffData",JSON.stringify(staffData))
             alert("saved successfully")
             let staffsLength = staffData.length
             staffLength.innerHTML =  "Total number of staffs:" + staffsLength
             showData()
             document.querySelector(".fname").value = ""
       }else{
           alert('all fields are required')
       }
    }
    
    function showData(){
       contTable.innerHTML = ""
       for(i=0;i<staffData.length;i++){
           let innerCont = document.createElement("div")
                innerCont.innerHTML =`
                <table class="table table-hover text-center">
                <thead>
                  <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">MiddleName</th>
                    <th scope="col">Department</th>
                    <th scope="col">DateofBirth</th>
                    <th scope="col">DateofEmployement</th>
                    <th scope="col">Number</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">${i}</th>
                    <td>${staffData[i].firstName}</td>
                    <td>${staffData[i].lastName}</td>
                    <td>${staffData[i].midleName}</td>
                    <td>${staffData[i].department}</td>
                    <td>${staffData[i].dateofBirth}</td>
                    <td>${staffData[i].dateofEmployement}</td>
                    <td>${staffData[i].number}</td>
                    <td><span><input type="button" class="btn btn-warning" value="EDIT" onclick='editStaff(${i})'><input type="button"  class="btn btn-danger" value="DELETE" onclick="remove(${i})"></span></td>
                  </tr>
                </tbody>
              </table>
                `
                contTable.append(innerCont)
       }
    }
    showData()

    function editStaff(indexes){
        confirmation = confirm("edit selected item?")
        if(confirmation == true){
        staff.style.display = "block"
        saveBtn.style.display = "none"
        updateBtn.style.display = "block"
     staffs = staffData[indexes]
     document.querySelector(".fname").value = staffs.firstName,document.querySelector(".lname").value = staffs.lastName,document.querySelector(".midname").value = staffs.midleName,document.querySelector(".dept").value = staffs.department,document.querySelector(".dob").value= staffs.dateofBirth,document.querySelector(".doe").value = staffs.dateofEmployement,document.querySelector(".numb").value = staffs.number
     document.getElementById("hiden").value = indexes
    }else{
        return editStaff(indexes)
    }
}

    // btnUpdate.style.display = 'block'
    // btnSave.style.display = 'none'
    //    db = flashCards[k];
    //    formQuestions.style.display = 'block'
    //    document.getElementById('txtQuest').value = db.question;
    //    document.getElementById('txtAns').value = db.answer;
    //    document.getElementById("index").value = k

    function remove(indexes){
        confirmed = confirm('delete selected item?')
        if(confirmed == true){
            staffData.splice(indexes,1)
            localStorage.setItem('staffData', JSON.stringify(staffData))
            let staffsLength = staffData.length
             staffLength.innerHTML =  "Total number of staffs:" + staffsLength
            showData()
        }
    }

    //btnAdmin
    btnAdmin.addEventListener("click", (e) =>{
         e.preventDefault()
         if(admin_item.style.display == "none"){
             admin_item.style.display = "block";
         }else{
             admin_item.style.display = "none"
         }
    })
      
//Update Staff
function updateStaff(){
    i = document.getElementById("hiden").value
    //staffIndex = staffData[i]
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
    showData()
    alert("updated successfully")
}
     
    
  
       
    