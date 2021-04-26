//selecting the elements
var  surName, firstName, middleName, nationality, dateOfBirth,lastSchoolAttended, classs, schoolAddress, dateAttended, familyName, otherName,address,email, img;
surName = document.getElementById('surName');
firstName = document.getElementById('firstName');
middleName = document.getElementById('middleName');
nationality = document.getElementById('nationality');
dateOfBirth = document.getElementById('dateOfBirth');
lastSchoolAttended = document.getElementById('lastSchoolAttended');
classs = document.getElementById('classs');
schoolAddress = document.getElementById('schoolAddress');
dateAttended = document.getElementById('dateAttended');
familyName = document.getElementById('familyName');
otherName = document.getElementById('otherName');
address = document.getElementById('address');
email = document.getElementById('email');
//img = document.getElementById('file').value

let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');
let p9 = document.getElementById('p9');
let p10 = document.getElementById('p10');

let users = document.querySelector('#users');
studentInfo = JSON.parse(localStorage.getItem("jss1Student"))

     //studentInfo = [];
     //localStorage.setItem('jss1Student', JSON.stringify(studentInfo))
       localStorage.getItem('jss1Student')

//adding event click to the button
let btnCon = document.querySelector('#btnContinue');
    btnCon.addEventListener('click', (e) =>{
        e.preventDefault();
       
    })

    function addNewUser(){
       // e.preventDefault();
       if(!surName.value == '' || !firstName.value == '' || !middleName.value == '' || !nationality.value == '' || !dateOfBirth.value == ''  || !lastSchoolAttended.value == ''
       || !classs.value == '' || !schoolAddress.value == '' || !dateAt.value == '' || !familyName.value == ''   || !otherName.value == ''   || !address.value == ''   || !email.value == ''
        ){
            alert('succesfully')
       }else{
           p1.style.display = "block"
           p1.style.color = 'red'
           p1.innerHTML = 'This field is required';

           p2.style.display = "block"
           p2.style.color = 'red'
           p2.innerHTML = 'This field is required';

           p3.style.display = "block"
           p3.style.color = 'red'
           p3.innerHTML = 'This field is required';

           p4.style.display = "block"
           p4.style.color = 'red'
           p4.innerHTML = 'This field is required';

           p5.style.display = "block"
           p5.style.color = 'red'
           p5.innerHTML = 'This field is required';

           // p6.style.display = "block"
           // p6.style.color = 'red'
           // p6.innerHTML = 'This field is required';

           p7.style.display = "block"
           p7.style.color = 'red'
           p7.innerHTML = 'This field is required';

           p8.style.display = "block"
           p8.style.color = 'red'
           p8.innerHTML = 'This field is required';

           p9.style.display = "block"
           p9.style.color = 'red'
           p9.innerHTML = 'This field is required';

           p10.style.display = "block"
           p10.style.color = 'red'
           p10.innerHTML = 'This field is required';

           p11.style.display = "block"
           p11.style.color = 'red'
           p11.innerHTML = 'This field is required';

           p12.style.display = "block"
           p12.style.color = 'red'
           p12.innerHTML = 'This field is required';

           p13.style.display = "block"
           p13.style.color = 'red'
           p13.innerHTML = 'This field is required';

           p14.style.display = "block"
           p14.style.color = 'red'
           p14.innerHTML = 'This field is required';
           
           p15.style.display = "block"
           p15.style.color = 'red'
           p15.innerHTML = 'This field is required';
           

       } 
       
       newUser = {
            "picx" : document.getElementById('file').value,
            "surName" : document.getElementById('surName').value,
            "firstName" : document.getElementById('firstName').value,
            "middleName" : document.getElementById('middleName').value,
            "nationality" : document.getElementById('nationality').value,
            "dateOfBirth" : document.getElementById('dateOfBirth').value,
            "lastSchoolAttended" : document.getElementById('lastSchoolAttended').value,
            "classs" : document.getElementById('classs').value,
            "schoolAddress" : document.getElementById('schoolAddress').value,
            "dateAt" : document.getElementById('dateAt').value,
            "familyName" : document.getElementById('familyName').value,
            "otherName" : document.getElementById('otherName').value,
            "address" : document.getElementById('address').value,
            "email" : document.getElementById('email').value,
        }

       
            
        studentInfo.unshift(newUser)
        localStorage.setItem('jss1Student', JSON.stringify(studentInfo))
        studentDetails();
        
    }

    studentDetails()
    function studentDetails(){
        users.innerHTML = ''
        for(i=0;i<studentInfo.length;i++){
             const cont1 = document.createElement('div')
             cont1.setAttribute('class', 'info');
             cont1.style.display=''
             cont1.innerHTML += `
                            <hr>
                            <div class='container' style='background-color:red'>
                            <img  src='${studentInfo[i].picx}' style='width:80px; height:90px; border-radius:50px;'>
                            Surname: ${studentInfo[i].surName} <br>
                            <span><button class='btn btn-danger btn-sm' onclick="deleteUser()" id='sp'  id='delete' style='margin-top:50px'>Delete</button></span>
                            <button class="btn btn-info btn-sm" onclick="" style='margin-top:50px'> Edit</button>
                            <button class="btn btn-success btn-sm" onclick="" style='margin-top:50px'> View Details</button>
                            </div>
                            `;
                            users.append(cont1)
         };
    }
 
      // to delete a user

    function deleteUser(){
        users.innerHTML = ''
        for(i=0;i<studentInfo.length;i++){
            studentInfo.splice(i,1)
            //  const cont1 = document.createElement('div')
            //  cont1.setAttribute('class', 'info');
            //  cont1.style.display=''
            //  cont1.innerHTML += `
            //                 <hr>
            //                 <div class='container' style='background-color:red'>
            //                 <img  src='${studentInfo[i].picx}' style='width:80px; height:90px; border-radius:50px;'>
            //                 Surname: ${studentInfo[i].surName} <br>
            //                 <span><button class='btn btn-danger btn-sm' onclick="" id='sp'  id='delete' style='margin-top:50px'>Delete</button></span>
            //                 <button class="btn btn-info btn-sm" onclick="" style='margin-top:50px'> Edit</button>
            //                 <button class="btn btn-success btn-sm" onclick="" style='margin-top:50px'> View Details</button>
            //                 </div>
            //                 `;
            //                 users.append(cont1)
         };
    }

   
            



   