import"./mobile-menu-b21003e7.js";const a=document.querySelector(".main-btn"),r=document.querySelector(".categories-gallery"),o=document.querySelector(".categories-btn-pn"),p=document.querySelector(".favorit-gallary-full"),b=document.querySelector("favorit-gallary-null"),u=document.querySelector(".hero-favorites");let i=JSON.parse(localStorage.getItem("favoritiesRecipes")),m=o.childNodes;u.hidden=!1;f();function f(){r.innerHTML=d(i),r.children.length===0&&(window.innerWidth>=768&&(u.hidden=!0),u.hidden=!1,p.hidden=!0,b.hidden=!1),a.classList.add("btn-active"),a.setAttribute("disabled","");const e=[];i.forEach(({category:t})=>{e.includes(t)||(e.push(t),o.innerHTML=L(e))})}a.addEventListener("click",h);function h(){m.forEach(e=>e.classList.remove("btn-active")),a.classList.add("btn-active"),r.innerHTML="",r.innerHTML=d(i)}function d(e){return e.map(({_id:t,title:n,description:l,rating:s,preview:g,category:v})=>`<div id="${t}" data-category="${v}" class="grid-item" style="background-image: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 0%, rgba(5, 5, 5, 0.00) 100%), url('${g}'); background-size: cover; background-position: center;">
        <svg class="favorit-icon-heart">
            <use href="../img/symbol-defs.svg#icon-heart"></use>
        </svg>
        <div><h2 class="filters-title-recipe">${n}</h2>
        <p class="filters-description-recipe">${l}</p>
        <div class="filters-rating-wrap">
  <p class="filters-rating-recipe">${s}</p>
  <svg class="filters-icon-rating-recipe-1 ${c(s,1)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-2 ${c(s,2)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-3 ${c(s,3)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-4 ${c(s,4)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-5 ${c(s,5)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <button class="filters-btn-recipe" type="button">See recipe</button>
</div>
      </div>
      </div>`).join("")}function c(e,t){return e>=t?"filters-icon-rating-yellow-"+t:"filters-icon-rating-black"}o.addEventListener("click",y);function y(e){a.removeAttribute("disabled",""),a.classList.remove("btn-active"),o.childNodes.forEach(n=>n.classList.remove("btn-active")),r.innerHTML=d(i.filter(n=>n.category===e.target.name)),e.target.classList.add("btn-active")}function L(e){return e.map(t=>`<button type="button" name="${t}" class="btn">
        ${t}
      </button>`).join("")}r.addEventListener("click",e=>{const n=e.target.parentNode.parentNode;let l=document.getElementsByClassName("btn-active");i.forEach((s,g)=>{s._id==n.id&&i.splice(g,1),localStorage.setItem("favoritiesRecipes",JSON.stringify(i))}),i=JSON.parse(localStorage.getItem("favoritiesRecipes")),r.innerHTML="",l[0].innerText==="All categories"?f():(r.innerHTML=d(i.filter(s=>s.category===l[0].innerText)),r.children.length===0&&f())});
