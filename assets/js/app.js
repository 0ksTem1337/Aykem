!function(){const e=document.getElementById("sidebarToggle"),t=(document.getElementById("sidebar"),document.getElementById("sidebarPages"),document.getElementById("page")),s=document.body;function o(){s.classList.remove("show-sidebar"),document.querySelector(".page__mask").remove()}function c(){s.classList.remove("show-sidebar"),document.querySelector(".page__mask").remove()}e.addEventListener("click",(e=>{s.classList.contains("show-sidebar")?(o(),c()):(function(){let e=document.createElement("div");e.classList.add("page__mask"),e.addEventListener("click",o),t.appendChild(e),s.classList.add("show-sidebar")}(),function(){let e=document.createElement("div");e.classList.add("page__mask"),e.addEventListener("click",c),t.appendChild(e),s.classList.add("show-sidebar")}())}))}(),function(){const e=document.querySelectorAll("[data-modal]"),t=document.body,s=document.querySelectorAll(".modal__close"),o=document.querySelectorAll(".modal");function c(e){e.querySelector(".modal__content").removeAttribute("style"),setTimeout((()=>{e.classList.remove("show"),t.classList.remove("no-scroll")}),200)}e.forEach((e=>{e.addEventListener("click",(e=>{let s=e.currentTarget.getAttribute("data-modal"),o=document.getElementById(s),c=o.querySelector(".modal__content");c.addEventListener("click",(e=>{e.stopPropagation()})),o.classList.add("show"),t.classList.add("no-scroll"),setTimeout((()=>{c.style.transform="none",c.style.opacity="1"}),1)}))})),s.forEach((e=>{e.addEventListener("click",(e=>{c(e.currentTarget.closest(".modal"))}))})),o.forEach((e=>{e.addEventListener("click",(e=>{c(e.currentTarget)}))}))}(),document.querySelectorAll("[data-autoresize]").forEach((e=>{let t=e.offsetHeight;e.addEventListener("input",(e=>{let s=e.target;s.style.height=t+"px",s.style.height=s.scrollHeight+"px"}))}));