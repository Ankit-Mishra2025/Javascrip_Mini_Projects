let randomBtn=document.querySelector('.randomBtn');
let ApplyBtn=document.querySelector('.ApplyBtn');

let colorInput=document.querySelector('#colorInput');

let currentColorValue=document.querySelector('.currentColorValue');
let container=document.querySelector(".container")

const colorArray=["Red","Green","White","Black","Cyan","Tomato","Yellow","Blue","LightGreen","Orange"]

const changeColor=(color)=>{
    container.style.backgroundColor=color;
    currentColorValue.innerText=color;
}

const randomColor=()=>{
 const randomNumber = Math.floor(Math.random()*colorArray.length);
 return colorArray[randomNumber]

}





const randomColorGenerator=()=>{
let color=randomColor();
changeColor(color)
}


const applyColor= ()=>{
    const color=colorInput.value;
    changeColor(color)
}




ApplyBtn.addEventListener('click',applyColor);
randomBtn.addEventListener('click',randomColorGenerator)