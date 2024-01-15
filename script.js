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
// let card = document.querySelector("#card")
// let icon = document.querySelector("i")

// card.addEventListener("dblclick", function(){
//     icon.style.transform = "translate(-50%,-50%) scale(1)"
//     icon.style.color = "red"
//     icon.style.opacity = 0.8
//     console.log('clicked !')
//     setTimeout(()=>{
//         icon.style.opacity = 0
//     },1000)
//     setTimeout(()=>{
//         icon.style.transform = "translate(-50%,-50%) scale(0)"
//     },3000)
// })


// var main = document.querySelector("#main")
// var crsr = document.querySelector(".crsr")


// main.addEventListener("mousemove", function(dets){

//     crsr.style.left = dets.x + "px";
//     crsr.style.top = dets.y + "px";
    
// })

// mouser hover image effect
var elem = document.querySelectorAll(".elem");

elem.forEach((val)=>{

    // console.log(val)
  val.addEventListener("mouseenter",function(){

    val.childNodes[3].style.opacity = 1;

  })  


  val.addEventListener("mouseleave",function(){

    val.childNodes[3].style.opacity = 0;

  })


  
  val.addEventListener("mousemove",function(dets){
    val.childNodes[3].style.left= dets.x + "px";
    val.childNodes[3].style.top = dets.y + "px";
  })
    
    
})
