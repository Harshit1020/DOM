// let txt = document.querySelector("h5");
// let addbtn = document.querySelector("#add");
// var flg = 0;

// addbtn.addEventListener("click" , function(){

//     if(flg == 0){
//         txt.innerHTML = "Friends"
//         txt.style.color = "green"
//         addbtn.innerHTML = "Remove"
//         flg = 1;
//     }
//     else{

//         txt.innerHTML = "Strangers"
//         txt.style.color = "black"
//         addbtn.innerHTML = "Add"
//         flg = 0;

//     }
// })


// Insta Love effect...................
let card = document.querySelector("#card")
let icon = document.querySelector("i")

card.addEventListener("dblclick", function(){

    icon.style.transform = "translate(-50%,-50%) scale(1)"
    icon.style.color = "red"
    icon.style.opacity = 0.8
    console.log('clicked !')
    setTimeout(()=>{
        icon.style.opacity = 0

    },1000)
    setTimeout(()=>{
        icon.style.transform = "translate(-50%,-50%) scale(0)"

    },3000)

})

