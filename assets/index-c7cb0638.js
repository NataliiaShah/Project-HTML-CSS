(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}})();const o=document.querySelector("#myModal"),i=document.querySelector(".btn-order"),d=document.querySelector(".hero-btn"),a=document.querySelector(".header-butn"),u=document.querySelector(".menu-list-btn"),y=document.querySelector(".myBtnClose");o.style.display="none";i.addEventListener("click",()=>{o.style.display="block"});d.addEventListener("click",()=>{o.style.display="block"});a.addEventListener("click",()=>{o.style.display="block"});u.addEventListener("click",()=>{o.style.display="block"});y.addEventListener("click",()=>{o.style.display="none"});window.addEventListener("click",s=>{s.target===o&&(o.style.display="none")});const m=document.querySelectorAll("li.modal-item");m.forEach(function(s){s.addEventListener("click",function(){const t=this.querySelector("svg.modal-checkbox-icon1"),l=this.querySelector("svg.modal-checkbox-icon");l.style.display!=="none"?(l.style.display="none",t.style.display="inline-block"):(l.style.display="inline-block",t.style.display="none")})});(()=>{const s=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),c=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),s.classList.toggle("is-open")};t.addEventListener("click",c),l.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(s.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})})();