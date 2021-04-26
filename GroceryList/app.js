
let input = document.getElementById('textField')
let addBtn = document.getElementById('addBtn')
let ul = document.getElementById('ul')
let data = []
//data = JSON.parse(localStorage.getItem('db'))

function add(item){
    if(item!=''){
        newInput = {
            value   : item,
    }
    data.push(newInput)
    localStorage.setItem("db",JSON.stringify(data))
    show()
    }else{
        alert('nothing inputed')
    }
}
show()

function show(){
    ul.innerHTML = ''
    for(i=0; i<data.length; i++){
        let li = document.createElement('li')
            li.style.border = '2px solid black'
            li.style.width = '25rem'
            li.style.margin = '25px'
            li.innerHTML = `
            <div style='float:left'>${data[i].value}</div> <span><i  <i class="fas fa-trash" onclick='del(${i})' style='margin-left: 330px; color:red'></i></span
            `
            ul.append(li)
    }
}

function del(i){
  confirmation = confirm('are you sure you want to delete?')
  if(confirmation == true){
      data.splice(i,1)
      localStorage.setItem("db",JSON.stringify(data))
  }
  show()
}

function delAll(i){
    confirmation = confirm('are you sure you want to delete all item?')
    if(confirmation == true){
        
      //  data.splice(i)
        localStorage.removeItem("db")
    }else{
        alert('no items to be cleared')
    }

    show()   
}







