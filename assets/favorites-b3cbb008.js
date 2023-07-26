import"./style-5599c1e1.js";const i=document.querySelector(".main-btn"),n=document.querySelector(".categories-gallery"),a=document.querySelector(".categories-btn-pn"),o=JSON.parse(localStorage.getItem("favoritiesRecipes"));n.innerHTML=g(o);console.log(n.children.length);i.classList.add("btn-active");i.setAttribute("disabled","");i.addEventListener("click",b);function b(){a.childNodes.forEach(s=>s.classList.remove("btn-active")),i.classList.add("btn-active"),n.innerHTML="",n.innerHTML=g(o)}function g(e){return e.map(({_id:s,title:r,description:d,rating:t,preview:u,category:f})=>`<div id="${s}" data-category="${f}" class="filters-box-child grid-item" style="background-image: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 0%, rgba(5, 5, 5, 0.00) 100%), url('${u}'); background-size: cover; background-position: center;">
        <svg class="filters-icon-heart">
            <use href="../img/symbol-defs.svg#icon-heart"></use>
        </svg>
        <h2 class="filters-title-recipe">${r}</h2>
        <p class="filters-description-recipe">${d}</p>
        <div class="filters-rating-wrap">
  <p class="filters-rating-recipe">${t}</p>
  <svg class="filters-icon-rating-recipe-1 ${c(t,1)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-2 ${c(t,2)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-3 ${c(t,3)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-4 ${c(t,4)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-5 ${c(t,5)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <button class="filters-btn-recipe" type="button">See recipe</button>
</div>
      </div>`).join("")}function c(e,s){return e>=s?"filters-icon-rating-yellow-"+s:"filters-icon-rating-black"}const l=[];o.forEach(({category:e})=>{l.includes(e)||l.push(e)});a.innerHTML=p(l);a.addEventListener("click",v);function v(e){i.removeAttribute("disabled",""),i.classList.remove("btn-active");const s=a.childNodes;s.forEach(r=>r.classList.remove("btn-active")),console.log(s),n.innerHTML=g(o.filter(r=>r.category===e.target.name)),e.target.classList.add("btn-active")}function p(e){return e.map(s=>`<button type="button" name="${s}" class="btn">
        ${s}
      </button>`).join("")}
