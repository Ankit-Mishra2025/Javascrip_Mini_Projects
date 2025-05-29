

let moon=document.querySelector('.moon');
let box=document.querySelector('.boxContainer');

let sun=document.querySelector(".sun");




let theme="light";

const BlackTheme=()=>{
    box.style.backgroundColor="black";
    box.style.color="White";
    theme="black";

 
}

const WhiteTheme=()=>{
    if (theme==="light") {
         box.style.backgroundColor="black";
    box.style.color="White";
    } else {
      box.style.backgroundColor="white";
    box.style.color="black";
    }
}


moon.addEventListener("click",BlackTheme);
sun.addEventListener("click",WhiteTheme);


