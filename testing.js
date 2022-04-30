const bgContainer=document.querySelector(".big-container");
const neH1=document.querySelector("h1");

const options={};

const observer=new IntersectionObserver(function(enteries,observer){
    enteries.forEach(entry =>{
        console.log(entry);
    });
},options)

observer.observe(neH1);