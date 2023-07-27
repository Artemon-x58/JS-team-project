import"./mobile-menu-50935ca1.js";const c=document.querySelector(".main-btn"),r=document.querySelector(".categories-gallery"),a=document.querySelector(".categories-btn-pn"),h=document.querySelector(".favorit-gallary-full"),S=document.querySelector("favorit-gallary-null"),u=document.querySelector(".hero-favorites");u.hidden=!1;const o=JSON.parse(localStorage.getItem("favoritiesRecipes"));r.innerHTML=v(o);r.children.length===0&&(window.innerWidth>=768&&(u.hidden=!0),u.hidden=!1,h.hidden=!0,S.hidden=!1);c.classList.add("btn-active");c.setAttribute("disabled","");c.addEventListener("click",L);function L(){a.childNodes.forEach(e=>e.classList.remove("btn-active")),c.classList.add("btn-active"),r.innerHTML="",r.innerHTML=v(o)}function v(t){return t.map(({_id:e,title:i,description:l,rating:s,preview:d,category:g})=>`<div id="${e}" data-category="${g}" class="grid-item" style="background-image: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 0%, rgba(5, 5, 5, 0.00) 100%), url('${d}'); background-size: cover; background-position: center;">
        <svg class="filters-icon-heart">
            <use href="./img/symbol-defs.svg#icon-heart"></use>
        </svg>
        <h2 class="filters-title-recipe">${i}</h2>
        <p class="filters-description-recipe">${l}</p>
        <div class="filters-rating-wrap">
  <p class="filters-rating-recipe">${s}</p>
  <svg class="filters-icon-rating-recipe-1 ${n(s,1)}">
    <use href="./img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-2 ${n(s,2)}">
    <use href="./img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-3 ${n(s,3)}">
    <use href="./img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-4 ${n(s,4)}">
    <use href="./img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-5 ${n(s,5)}">
    <use href="./img/symbol-defs.svg#icon-star"></use>
  </svg>
  <button class="filters-btn-recipe" type="button">See recipe</button>
</div>
      </div>`).join("")}function n(t,e){return t>=e?"filters-icon-rating-yellow-"+e:"filters-icon-rating-black"}const p=[];o.forEach(({category:t})=>{p.includes(t)||p.push(t)});a.innerHTML=C(p);a.addEventListener("click",R);function R(t){c.removeAttribute("disabled",""),c.classList.remove("btn-active");const e=a.childNodes;e.forEach(i=>i.classList.remove("btn-active")),console.log(e),r.innerHTML=v(o.filter(i=>i.category===t.target.name)),t.target.classList.add("btn-active")}function C(t){return t.map(e=>`<button type="button" name="${e}" class="btn">
        ${e}
      </button>`).join("")}console.log(r);r.addEventListener("click",t=>{const e=t.target.parentNode;e.classList.toggle("filters-icon-heart-toggle");const i=e.parentNode;i.querySelector(".filters-icon-heart");const l=i.querySelector(".filters-title-recipe"),s=i.querySelector(".filters-description-recipe"),d=i.querySelector(".filters-rating-recipe"),g=i.getAttribute("data-category"),m=i.style.backgroundImage,f={_id:i.id,title:l.textContent,description:s.textContent,rating:d.textContent,preview:m.match(/url\(['"]?([^'"]+)['"]?\)/)[1],category:g};e.classList.contains("filters-icon-heart-toggle")?favoritiesRecipes.some(y=>y._id===f._id)||(favoritiesRecipes.push(f),localStorage.setItem("favoritiesRecipes",JSON.stringify(favoritiesRecipes))):(favoritiesRecipes=favoritiesRecipes.filter(b=>b._id!==f._id),localStorage.setItem("favoritiesRecipes",JSON.stringify(favoritiesRecipes)))});
