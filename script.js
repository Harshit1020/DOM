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
// var elem = document.querySelectorAll(".elem");

// elem.forEach((val)=>{

//     // console.log(val)
//   val.addEventListener("mouseenter",function(){

//     val.childNodes[3].style.opacity = 1;

//   })  


//   val.addEventListener("mouseleave",function(){

//     val.childNodes[3].style.opacity = 0;

//   })


  
//   val.addEventListener("mousemove",function(dets){
//     val.childNodes[3].style.left= dets.x + "px";
//     val.childNodes[3].style.top = dets.y + "px";
//   })
    
    
// })



// var arr = [
//     { dp: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { dp: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1631391993833-9a0c6bff7ac1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { dp: "https://images.unsplash.com/photo-1626569241812-bf6ed3f65753?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1630825434059-497a58eb1517?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { dp: "https://plus.unsplash.com/premium_photo-1679931608155-9a26a9dccd6a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1514163161321-f4f7c2a90296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
// ];

// var clutter = "";
// arr.forEach((elem, id) => {
//     clutter += `<div class="story">
//                     <img id="${id}" src="${elem.dp}" alt="">
//                 </div>`;
// });

// console.log(clutter);
// document.querySelector("#storiya").innerHTML = clutter;

// document.querySelector("#storiya").addEventListener("click", function (dets) {
//     document.querySelector("#full-screen").style.display = "block"
//     document.querySelector("#full-screen").style.backgroundImage = `url(${arr[ dets.target.id].story})`


//     setTimeout(()=>{

//         document.querySelector("#full-screen").style.display = "none"

//     },3000)
    
// });

// Problem solving and revision
// closure : A closure is a function having access to the parent scope 
// even after the parent function has closed 
// A closure is created when we define a function , not when a function is executed 

console.log("Hello World!");
// global scopt
let a = 1;
const parentFun = ()=>{
    // local scope
    let b = 2;
    console.log(a)
    console.log(b)

    const chilFun = ()=>{
        console.log(a + 5);
        console.log(b + 3);

    }
   return chilFun;
}
const result = parentFun()
console.log(result)
result();
console.log(a)


// IIFE ==> ( Immediately Invoked Function Expression )

// const privateCounter = (()=>{
//     let cnt = 0;
//     console.log(`initial value : ${cnt}`)
//     return ()=>{cnt += 1 ; console.log(cnt)}

// })();

// // closure over the private counter scope 
// privateCounter()
// privateCounter()



const credit = ((num)=>{

    let cred = num;
    console.log(`initial credits : ${cred}`);
    return ()=>{
        cred -= 1;
        if(cred > 0){
            console.log(`playing game credints left ${cred} , credit(s)`);
        }
        else{
            console.log("not enough credits")
        }
    }
})(5);

credit()
credit()
credit()
credit()
credit()    

