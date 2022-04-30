const form=document.forms;
const emailInput=document.querySelector(".email input");
const passwordInput=document.querySelector(".password input");
const emailError=document.querySelector(".emailerror");
const passwordError=document.querySelector(".passworderror");
const btn=document.querySelector("button");

btn.onclick=function(e){

    if(emailInput.value===""){

        e.preventDefault();
        emailError.classList.toggle("error");
        emailError.innerHTML="please enter your email address";
        

    };
    if (passwordInput.value===""){

        e.preventDefault();
        passwordError.classList.toggle("error");
        passwordError.innerHTML="please enter your password";

    }
};

