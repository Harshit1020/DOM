let txt = document.querySelector("h5");
let addbtn = document.querySelector("#add");
let rmbtn = document.querySelector("#rmv")

addbtn.addEventListener("click" , function(){

    txt.innerHTML = "Friends"
    txt.style.color = "green"

})


rmbtn.addEventListener("click" , function(){
    txt.innerHTML = "Strangers"

})