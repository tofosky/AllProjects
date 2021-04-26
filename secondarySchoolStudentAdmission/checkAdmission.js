let txt1 = document.getElementById('txt1')

let btn1 = document.getElementById('btn1')
    btn1.addEventListener('click', (e)=>{
        if(txt1.value !==''){
        studentInfo = JSON.parse(localStorage.getItem("jss1Student"))
        finder = studentInfo.find(student=>student.firstName ==  txt1)
        console.log(finder);
        //users.innerHTML= JSON.stringify(finder)
        users.innerHTML = ''
        for(i=0;i<studentInfo.length;i++){
             const cont1 = document.createElement('div')
             cont1.setAttribute('class', 'info');
             cont1.style.display=''
             cont1.innerHTML += `
                            <hr>
                            <div class='container' style='background-color:red; margin-left:21%; width:58%'>
                            <img  src='${studentInfo[i].picx}' style='width:80px; height:90px; border-radius:50px;'>
                             Fullname: ${studentInfo[i].firstName} <br>
                             <button class="btn btn-danger btn-sm" onclick="" style='margin-top:50px' ${studentInfo[i].id}> Delete</button>
                             <button class="btn btn-success btn-sm" onclick="" style='margin-top:50px'> View Details</button>
                            </div>
                            `;
                            users.append(cont1)
         };
        users.style.color = 'white'
    }else{
    alert('nothing inputed')
    }
    })

    function del(id){
            
        confirmation = confirm("Delete selected item ?")
        if(confirmation == true){
            studentInfo[i].splice(id,1);
            localStorage.setItem("newData",JSON.stringify('jss1Student'))
            displayInfo()
                               }
                     }
