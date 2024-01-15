let txt = document.querySelector("h5");
let addbtn = document.querySelector("#add");
var flg = 0;

addbtn.addEventListener("click" , function(){

    if(flg == 0){
        txt.innerHTML = "Friends"
        txt.style.color = "green"
        addbtn.innerHTML = "Remove"
        flg = 1;
    }
    else{

        txt.innerHTML = "Strangers"
        txt.style.color = "black"
        addbtn.innerHTML = "Add"
        flg = 0;

    }
})

