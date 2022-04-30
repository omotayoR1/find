const head1=document.querySelector("h1");
const twitter=document.querySelector(".twitter");
const facebook=document.querySelector(".facebook");
const phone=document.querySelector(".phone");
const instagram=document.querySelector(".instagram");
const whatsapp=document.querySelector(".whatsapp");

const options={
    threshold: 0.5
};
//find everything//
const observer1=new IntersectionObserver(function(enteries,observer1){

    enteries.forEach(entry => {

        entry.target.classList.toggle("hanimation");
        if (entry.isIntersecting) observer1.unobserve(entry.target);
    });
},options);

observer1.observe(head1);

const observer2=new IntersectionObserver(function(enteries,observer2){

    enteries.forEach(entry => {

        entry.target.classList.toggle("twitter1");
        if (entry.isIntersecting) observer2.unobserve(entry.target);

    });
},options);

observer2.observe(twitter);

const observer3=new IntersectionObserver(function(enteries,observer3){

    enteries.forEach(entry => {

        entry.target.classList.toggle("facebook1");
        if (entry.isIntersecting) observer3.unobserve(entry.target);

    });
},options);

observer3.observe(facebook);

const observer4=new IntersectionObserver(function(enteries,observer4){

    enteries.forEach(entry => {

        entry.target.classList.toggle("phone1");
        if (entry.isIntersecting) observer4.unobserve(entry.target);

    });
},options);

observer4.observe(phone);

const observer5=new IntersectionObserver(function(enteries,observer5){

    enteries.forEach(entry => {

        entry.target.classList.toggle("instagram1");
        if (entry.isIntersecting) observer5.unobserve(entry.target);

    });
},options);

observer4.observe(instagram);

const observer6=new IntersectionObserver(function(enteries,observer6){

    enteries.forEach(entry => {

        entry.target.classList.toggle("whatsapp1");
        if (entry.isIntersecting) observer6.unobserve(entry.target);

    });
},options);

observer6.observe(whatsapp);

const contain=document.querySelector(".connectcontainer");
const option={
    threshold: 0.3
}

const observer7=new IntersectionObserver(function(enteries,observer7){

    enteries.forEach(entry =>{
        if (entry.isIntersecting==true){

            entry.target.classList.toggle("connectcontainer1");
            console.log(entry.target);
        };
    });
},option);

observer7.observe(contain);

