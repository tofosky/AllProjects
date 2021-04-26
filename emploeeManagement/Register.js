
let addNew = document.querySelector(".addNew")
let btnnnn = document.querySelector(".btnnn")
let ff = document.querySelector("#fff").value
let lname = document.querySelector("#lnamee").value
let midname = document.querySelector("#midnamee").value
let dept = document.querySelector("#deptt").value
let dob = document.querySelector("#dobb").value
let doe = document.querySelector("#doee").value
let numb = document.querySelector("#numbb").value
let saveBtn = document.querySelector(".saveBtn")
let updateBtn = document.querySelector("#updateBtn")
let contTable = document.querySelector(".contTable")
let btnAdmin = document.querySelector(".btnAdmin")
let admin_item = document.querySelector(".admin-item")
let staffLength = document.querySelector("#staffLength")
let hiden = document.querySelector("#hiden")
let tb = document.querySelector(".tb")
let pics   = document.getElementById("#pics").value
let closeEdit= document.querySelector(".closeEdit")


// let imageFile = pics.substring(10)
// console.log("an image");
//document.write("an image file",imageFile)






let staffData = []
staffData = JSON.parse(localStorage.getItem("staffData"))


     addNew.addEventListener("click", newStaff)
         function newStaff(){
        if(staff.classList.toggle('centered')){
            staff.style.display = 'block';
        }else{
            staff.style.display = 'block';
        }
            
    }
    
   
       function newStaffs(item1,item2,item3,item4,item5,item6,item7,item8){
       if(item1!="" && item2!="" && item3!="" && item4!="" && item5!="" && item6!="" && item7!="" && item8!=""){
             staffObj = {
                 image     : item8,
                 firstname: item,
                 lastname : item2,
                 middlename : item3,
                 department : item4,  
                 dateofbirth : item5, 
                 dateofemployment : item6,
                 number : item7,
             }
             staffData.push(staffObj)
             localStorage.setItem( "staffData",JSON.stringify(staffData))
             alert("saved successfully")
            
             showData()
             //document.querySelector(".fname").value = ""
       }else{
           alert('all fields are required')
       }
    }
    
    function showData(){
       tb.innerHTML = ""
       for(i=0;i<staffData.length;i++){
        //let innerCont = document.createElement("div")
        tb.innerHTML +=`
           
            <tr>
              <th scope="row">${i}</th>
              <td>${staffData[i].image}</td>
              <td>${staffData[i].firstname}</td>
              <td>${staffData[i].lastname}</td>
              <td>${staffData[i].middlename}</td>
              <td>${staffData[i].department}</td>
              <td>${staffData[i].dateofbirth}</td>
              <td>${staffData[i].dateofemployment}</td>
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
        //staff.style.display = "block"
        //saveBtn.style.display = "none"
        //updateBtn.style.display = "block"
     staffs = staffData[indexes]
     document.querySelector("#ff").value = staffs.firstName,document.querySelector("#lname").value = staffs.lastName,document.querySelector("#midname").value = staffs.midleName,document.querySelector("#dept").value = staffs.department,document.querySelector("#dob").value= staffs.dateofBirth,document.querySelector("#doe").value = staffs.dateofEmployement,
     document.querySelector("#numb").value = staffs.number, document.querySelector("#pics").value = staffs.Image
     document.getElementById("hiden").value = indexes
    }else{
        return editStaff(indexes)
    }
}

    function remove(indexes){
        confirmed = confirm('delete selected item?')
        if(confirmed == true){
            staffData.splice(indexes,1)
            localStorage.setItem('staffData', JSON.stringify(staffData))
            //let staffsLength = staffData.length
             //staffLength.innerHTML =  "Total number of staffs:" + staffsLength
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
        dateofEmployement:document.querySelector(".doe").value  ,
        Image: document.querySelector(".pics").value
    }
    staffData[i] = staffObj
   localStorage.setItem( "staffData",JSON.stringify(staffData))
    showData()
    alert("updated successfully")
}
     
    
  
       
        