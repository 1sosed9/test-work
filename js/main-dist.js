!function(){const e=document.querySelector(".form"),t=document.querySelector(".form__input");t.addEventListener("focus",(function(){e.classList.add("form--active")})),t.addEventListener("blur",(function(){e.classList.remove("form--active")}))}(),function(){const e=document.querySelectorAll(".costumers__table-row");let t="";const c=document.querySelectorAll(".costumers__table-head > :nth-child(1) > *").length;for(let e=1;e<=c;e++){let c=document.querySelectorAll(`.costumers__table-row > :nth-child(${e})`),o=0;c.forEach((e=>{const t=e.offsetWidth;t>o&&(o=t+1)})),t+=o+"px "}e.forEach((e=>{e.style.gridTemplateColumns=`${t}`}))}(),function(){const e=document.querySelector("#main"),t=document.querySelector("#aside");e.style.height=`${t.offsetHeight}px`}(),function(){const e=document.querySelector(".burger"),t=document.querySelector(".close"),c=document.querySelector(".aside");e.addEventListener("click",(()=>{c.classList.add("aside_active")})),t.addEventListener("click",(()=>{c.classList.remove("aside_active")}))}();