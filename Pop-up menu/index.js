let conatiner=document.querySelector('.conatiner');

let btn=document.querySelector('.btn');
let pop_Up=document.querySelector('.pop-up');
let okBtn=document.querySelector('.okBtn')



const popDown=()=>{
    pop_Up.classList.add("pop-down");
}

const popUp=()=>{
    pop_Up.classList.remove('pop-down')
}

btn.addEventListener("click",popDown);
okBtn.addEventListener('click',popUp)