import{h}from"./modal-rating-b1d97c2c.js";const a=document.querySelector(".main-btn"),r=document.querySelector(".categories-gallery"),l=document.querySelector(".categories-btn-pn"),y=document.querySelector(".favorit-gallary-full"),L=document.querySelector("favorit-gallary-null"),u=document.querySelector(".hero-favorites");let s=JSON.parse(localStorage.getItem("favoritiesRecipes")),E=l.childNodes;u.hidden=!1;f();function f(){r.innerHTML=d(s),r.children.length===0&&(window.innerWidth>=768&&(u.hidden=!0),u.hidden=!1,y.hidden=!0,L.hidden=!1),a.classList.add("btn-active"),a.setAttribute("disabled","");const e=[];s.forEach(({category:t})=>{e.includes(t)||(e.push(t),l.innerHTML=k(e))})}a.addEventListener("click",S);function S(){E.forEach(e=>e.classList.remove("btn-active")),a.classList.add("btn-active"),r.innerHTML="",r.innerHTML=d(s)}function d(e){return e.map(({_id:t,title:n,description:o,rating:i,preview:g,category:m})=>`<div id="${t}" data-category="${m}" class="grid-item" style="background-image: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 0%, rgba(5, 5, 5, 0.00) 100%), url('${g}'); background-size: cover; background-position: center;">
        <svg class="favorit-icon-heart">
            <use href="../img/symbol-defs.svg#icon-heart"></use>
        </svg>
        <div><h2 class="filters-title-recipe">${n}</h2>
        <p class="filters-description-recipe">${o}</p>
        <div class="filters-rating-wrap">
  <p class="filters-rating-recipe">${i}</p>
  <svg class="filters-icon-rating-recipe-1 ${c(i,1)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-2 ${c(i,2)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-3 ${c(i,3)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-4 ${c(i,4)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-5 ${c(i,5)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <button class="filters-btn-recipe" type="button">See recipe</button>
</div>
      </div>
      </div>`).join("")}function c(e,t){return e>=t?"filters-icon-rating-yellow-"+t:"filters-icon-rating-black"}l.addEventListener("click",R);function R(e){a.removeAttribute("disabled",""),a.classList.remove("btn-active"),l.childNodes.forEach(n=>n.classList.remove("btn-active")),r.innerHTML=d(s.filter(n=>n.category===e.target.name)),e.target.classList.add("btn-active")}function k(e){return e.map(t=>`<button type="button" name="${t}" class="btn">
        ${t}
      </button>`).join("")}r.addEventListener("click",e=>{const n=e.target.parentNode.parentNode;let o=document.getElementsByClassName("btn-active");s.forEach((i,g)=>{i._id==n.id&&s.splice(g,1),localStorage.setItem("favoritiesRecipes",JSON.stringify(s))}),s=JSON.parse(localStorage.getItem("favoritiesRecipes")),r.innerHTML="",o[0].innerText==="All categories"?f():(r.innerHTML=d(s.filter(i=>i.category===o[0].innerText)),r.children.length===0&&f())});const v=document.querySelector(".categories-gallery"),N=document.querySelector(".ab-give-a-rating"),$=document.querySelector(".ab-exit-btn");console.log(v);function p(){ratingModal.toggleAttribute("data-hidden"),recipeModal.toggleAttribute("modal-margin")}function b(){backdropRecipe.toggleAttribute("data-hidden"),document.body.style.overflow="auto",ratingModal.hasAttribute("data-hidden")||p()}v.addEventListener("click",e=>{console.log(e.target.parentNode.parentNode.id),e.target.parentNode.parentNode.id===""&&console.log("buba"),h(e)});N.addEventListener("click",e=>{p()});$.addEventListener("click",e=>{b()});document.addEventListener("keydown",e=>{e.key==="Escape"&&b()});
