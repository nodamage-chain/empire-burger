(()=>{"use strict";const e=document.getElementById("menu-title"),t=()=>{window.innerWidth<=600?e.innerHTML="nossa especialidade":e.innerHTML="cardápio imperial | burger"};window.addEventListener("resize",t);t(),(()=>{const e=document.querySelectorAll('[data-menu="smooth"] a[href^="#"]'),t=e=>{e.preventDefault();const t=e.currentTarget.getAttribute("href"),n=document.querySelector(t);n&&n.scrollIntoView({behavior:"smooth",block:"start"})};e.forEach((e=>{e.addEventListener("click",t)}))})(),(()=>{const e=document.querySelectorAll('[data-anime^="scroll"]');if(e.length){const t=.6*window.innerHeight,n=()=>{e.forEach((e=>{e.getBoundingClientRect().top-t<0?e.classList.add("active"):e.classList.remove("active")}))};n(),window.addEventListener("scroll",n)}})(),(()=>{const e=document.querySelector("[data-status]"),t=document.querySelector("[data-week]"),n=t.dataset.week.split(",").map(Number),r=t.dataset.weekHour.split(",").map(Number),a=t.dataset.weekendHour.split(",").map(Number),o=new Date,s=o.getDay(),i=o.getHours(),d=-1!==n.indexOf(s),c=i>=r[0]&&i<r[1],l=i>=a[0]&&i<a[1],u="[0,6]".includes(s);d&&u?l&&(t.classList.add("open"),e.innerText="aberto"):c&&(t.classList.add("open"),e.innerText="aberto")})()})();