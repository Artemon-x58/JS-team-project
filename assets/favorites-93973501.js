import{l as r,h as L}from"./to-top-button-34345b2b.js";const c=document.querySelector(".main-btn"),n=document.querySelector(".categories-gallery"),d=document.querySelector(".categories-btn-pn"),$=document.querySelector(".favorit-gallary-full"),h=document.querySelector(".favorit-gallary-null"),v=document.querySelector(".hero-favorites");let a=JSON.parse(localStorage.getItem("favoritiesRecipes")),E=d.childNodes;const p=window.matchMedia("(min-width: 768px) and (max-width: 1280px)");h.classList.add("visually-hidden");f();function f(){if(n.innerHTML=g(a),n.children.length===0){let t=function(s){s.matches||window.matchMedia("(min-width: 1280px)").matches?v.classList.remove("visually-hidden"):v.classList.add("visually-hidden")};p.addListener(t),t(p),$.classList.add("visually-hidden"),h.classList.remove("visually-hidden")}c.classList.add("btn-active"),c.setAttribute("disabled","");const e=[];a.forEach(({category:t})=>{e.includes(t)||(e.push(t),d.innerHTML=k(e))})}c.addEventListener("click",S);function S(){E.forEach(e=>e.classList.remove("btn-active")),c.classList.add("btn-active"),n.innerHTML="",n.innerHTML=g(a)}function g(e){return e.map(({_id:t,title:s,description:o,rating:i,preview:u,category:y})=>`<div id="${t}" data-category="${y}" class="grid-item" style="background-image: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 0%, rgba(5, 5, 5, 0.00) 100%), url('${u}'); background-size: cover; background-position: center;">
        <svg class="favorit-icon-heart">
            <use href="${r}#icon-heart"></use>
        </svg>
        <div><h2 class="filters-title-recipe">${s}</h2>
        <p class="filters-description-recipe">${o}</p>
        <div class="filters-rating-wrap">
  <p class="filters-rating-recipe">${i}</p>
  <svg class="filters-icon-rating-recipe-1 ${l(i,1)}">
    <use href="${r}#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-2 ${l(i,2)}">
    <use href="${r}#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-3 ${l(i,3)}">
    <use href="${r}#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-4 ${l(i,4)}">
    <use href="${r}#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-5 ${l(i,5)}">
    <use href="${r}#icon-star"></use>
  </svg>
  <button class="filters-btn-recipe" type="button">See recipe</button>
</div>
      </div>
      </div>`).join("")}function l(e,t){return e>=t?"filters-icon-rating-yellow-"+t:"filters-icon-rating-black"}d.addEventListener("click",M);function M(e){c.removeAttribute("disabled",""),c.classList.remove("btn-active"),d.childNodes.forEach(s=>s.classList.remove("btn-active")),n.innerHTML=g(a.filter(s=>s.category===e.target.name)),e.target.classList.add("btn-active")}function k(e){return e.map(t=>`<button type="button" name="${t}" class="btn">
        ${t}
      </button>`).join("")}n.addEventListener("click",e=>{const s=e.target.parentNode.parentNode;let o=document.getElementsByClassName("btn-active");a.forEach((i,u)=>{i._id==s.id&&a.splice(u,1),localStorage.setItem("favoritiesRecipes",JSON.stringify(a))}),a=JSON.parse(localStorage.getItem("favoritiesRecipes")),n.innerHTML="",o[0].innerText==="All categories"?f():(n.innerHTML=g(a.filter(i=>i.category===o[0].innerText)),n.children.length===0&&f())});const R=document.querySelector(".categories-gallery"),w=document.querySelector(".ab-give-a-rating"),N=document.querySelector(".ab-exit-btn");function m(){ratingModal.toggleAttribute("data-hidden"),recipeModal.toggleAttribute("modal-margin")}function b(){backdropRecipe.toggleAttribute("data-hidden"),document.body.style.overflow="auto",ratingModal.hasAttribute("data-hidden")||m()}R.addEventListener("click",e=>{e.target.parentNode.parentNode.id,L(e)});w.addEventListener("click",e=>{m()});N.addEventListener("click",e=>{b()});document.addEventListener("keydown",e=>{e.key==="Escape"&&b()});
