// let main = document.querySelector("#main")
// // main.style.backgroundColor = "black"
// let container = document.querySelector("#container")
// // container.style.backgroundColor = "red"
// var screen = document.querySelector("#cal-screen")
// screen.style.backgroundColor = "red"
let anser = document.querySelector("#answer")
anser.innerHTML = "0"
let bt = document.querySelectorAll(".btn");
var arr = bt
// console.log(arr)
var string  = "";
arr.forEach(function(btn){   
    btn.addEventListener("click",function(event){
        if(event.target.innerHTML == "Del"){
            string = string.substring(0,string.length - 1);
            anser.innerHTML = string
        }
        else if(event.target.innerHTML == "Ac"){
            string = '';
            anser.innerHTML = string

        }
        else if(event.target.innerHTML == "="){
              string = eval(string);
              anser.innerHTML = string              
        }
        else{
            string += event.target.innerHTML;
            anser.innerHTML = string
        }
    })
})


// for(let i = 1; i <=arr.length;){
// bt.addEventListener("click",function(){
//     anser.innerHTML = 'String'
// })
// }

