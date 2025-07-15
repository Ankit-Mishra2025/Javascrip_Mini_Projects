let Hr=document.querySelector(".hour-hand");
let Min=document.querySelector(".min-hand");
let Sec=document.querySelector(".sec-hand");
let dh=document.querySelector(".dh");
let dm=document.querySelector(".dm");
let ds=document.querySelector(".ds");

setInterval(()=>{
let time=new Date();
let h=time.getHours();
let m=time.getMinutes();
let s=time.getSeconds();

let hrotation=30*h+h/2;
let mrotation=6*m;
let srotation=6*s;
Hr.style.transform=`rotate(${hrotation}deg)`
Min.style.transform=`rotate(${mrotation}deg)`
Sec.style.transform=`rotate(${srotation}deg)`
dh.innerHTML=h;
dm.innerHTML=m;
ds.innerHTML=s;

})



// let hr=document.querySelector(".hour-hand");
// let min=document.querySelector(".min-hand");
// let sec=document.querySelector("sec-hand");


// setInterval(()=>{
// let time=new Date();
// let h=time.getHours();
// let m=time.getMinutes();
// let s=time.getSeconds();

// let hrotation=30*h+h/2;
// let mrotation=6*m;
// let srotation=6*s;

// hr.style.transform=`rotate(${hrotation}deg)`;
// min.style.transform=`rotate(${mrotation}deg)`;
// sec.style.transform=`rotate(${srotation}deg)`






// })