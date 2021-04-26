let imageUpload  = document.getElementById("imageUpload"); //file
let uploadMsg = document.getElementById("uploadMsg");     //p
let img = document.getElementById("img");         //image
imageUpload.onchange =  taofik
function taofik(){
    let input = this.files[0];
    let text;
    if(input){
        text = imageUpload.value.replace("C:\\fakepath\\", "");
        img.src= text
        console.log(img);
    }else{text = "please select a file"};
    uploadMsg.innerHTML = text;
};

