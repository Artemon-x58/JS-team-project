import debounce from "lodash.debounce";

import { BackendAPI } from './tasty-backend-api';

import axios from "axios";




const gallery = document.querySelector(".categories-wrapper")

axios.get(`https://tasty-treats-backend.p.goit.global/api/categories`).then(res => {
    
const categories = res.data;
    categories.forEach(category => {
        // console.log(category.name);
        makeMurkup(category.name)
    });
})



const selectTime = document.querySelector("#time");
const selectArea = document.querySelector(".filters-select-area");
const selectIngredients = document.querySelector(".filters-select-ingredients");
const inputSearch = document.querySelector(".filters-input");
const btnResetFilers = document.querySelector(".filters-reset-btn");
const btnAllCategories = document.querySelector(".categories-btn")
const contParentCard = document.querySelector(".filters-box-parent");

// const contChildCard = document.querySelector(".filters-box-child");
// const iconHeart = document.querySelector(".filters-icon-heart");
// const titleCard = document.querySelector(".filters-title-recipe");
// const descriptionCard = document.querySelector(".filters-description-recipe");
// const numberRatingCard = document.querySelector(".filters-rating-recipe");
const iconRating1 = document.querySelector(".filters-icon-rating-recipe-1");
const iconRating2 = document.querySelector(".filters-icon-rating-recipe-2");
const iconRating3 = document.querySelector(".filters-icon-rating-recipe-3");
const iconRating4 = document.querySelector(".filters-icon-rating-recipe-4");
const iconRating5 = document.querySelector(".filters-icon-rating-recipe-5");
const btnSeeRecipe = document.querySelector(".filters-btn-recipe");


const backendReturnDataFiltersForm = new BackendAPI();



const filtersBoxTimeArea = document.querySelector(".filters-box-time-area")
const areaLabel = document.querySelector(".filters-label-area")
const formFiltr = document.querySelector(".filters-form")
// console.log(areaLabel)



const mediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1200px)');


function handleMediaQueryChange(event) {
  if (event.matches) {
    filtersBoxTimeArea.removeChild(areaLabel)
    filtersBoxTimeArea.insertAdjacentElement("afterend", areaLabel)

    backendReturnDataFiltersForm.limit = 8;
    console.log(backendReturnDataFiltersForm.limit);
  
  } else if (window.matchMedia('(min-width: 1200px)').matches) {
 
    backendReturnDataFiltersForm.limit = 9;
    console.log(backendReturnDataFiltersForm.limit);
 
  } else {
    formFiltr.removeChild(areaLabel);
    filtersBoxTimeArea.insertAdjacentElement("beforeend", areaLabel)

    backendReturnDataFiltersForm.limit = 6;
    console.log(backendReturnDataFiltersForm.limit);
    
  }
}

mediaQuery.addListener(handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);








backendReturnDataFiltersForm.searchAreas().then(res => {
    const sortedArea = res.data.sort((a, b) => a.name.localeCompare(b.name));
    sortedArea.forEach(({_id, name}) => {
        // console.log(el)
        createOptionsArea(_id, name)
    })
})

function createOptionsArea (id, name) {
const option = document.createElement("option");
option.id = id;
option.value = name;
option.textContent = name;
selectArea.appendChild(option);
}


backendReturnDataFiltersForm.searchingredients().then(res => {
    const sortedIngredients = res.data.sort((a, b) => a.name.localeCompare(b.name));
    sortedIngredients.forEach(({_id, name}) => {
      // console.log(_id)
        createOptionsIngredients(_id, name)
    })
})

function createOptionsIngredients (id, name) {
    const option = document.createElement("option");
    option.classList.add("option-ingredients")
    option.value = id;
    option.textContent = name;
    selectIngredients.appendChild(option);
    }





// --------------------------------------------------------------ЛОГИКА ДОБАВЛЕНИЯ КАРТОЧЕК В КОНТЕЙНЕР

btnAllCategories.addEventListener("click", updateQuantityCards)

function updateQuantityCards() {
  btnAllCategories.classList.remove("categories-btn-disable")
  //
  contParentCard.innerHTML = '';
backendReturnDataFiltersForm.searchAllRecipes().then(res => {
    
    // console.log(res.data.results);
    res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
        // console.log(title, description, rating);
        // console.log(_id)
        createRecipeContainers(1, _id, title, description, rating, preview, category);

        
          
    })
    const iconsHeartActive = document.querySelectorAll(".filters-icon-heart");
// console.log(iconsHeartActive);
iconsHeartActive.forEach(icon => {
  // console.log(icon.parentNode.id)
  makeHeartActive(icon.parentNode.id, icon)
})
}).catch(error => {
    console.error('Произошла ошибка при запросе:', error);
});
}

function makeHeartActive (cardId, icon) {
const localLibrary = localStorage.getItem("favoritiesRecipes")
// console.log(localLibrary)
if(localLibrary) {
  const parsedData = JSON.parse(localLibrary)
  parsedData.forEach(({_id}) => {
    if(_id === cardId) {
      icon.classList.add("filters-icon-heart-toggle")
    }
    return
  })
}
}
makeHeartActive()

function createRecipeContainers(numContainers, _id, title, description, rating, preview, category) {
    for (let i = 0; i < numContainers; i++) {
        
    
    const murkup = `<div id="${_id}" data-category="${category}" class="filters-box-child" style="background-image: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 0%, rgba(5, 5, 5, 0.00) 100%), url('${preview}'); background-size: cover; background-position: center;">
        <svg class="filters-icon-heart">
            <use href="../img/symbol-defs.svg#icon-heart"></use>
        </svg>
        <h2 class="filters-title-recipe">${title}</h2>
        <p class="filters-description-recipe">${description}</p>
        <div class="filters-rating-wrap">
  <p class="filters-rating-recipe">${rating}</p>
  <svg class="filters-icon-rating-recipe-1 ${getRatingColorClass(rating, 1)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-2 ${getRatingColorClass(rating, 2)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-3 ${getRatingColorClass(rating, 3)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-4 ${getRatingColorClass(rating, 4)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-5 ${getRatingColorClass(rating, 5)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <button class="filters-btn-recipe" type="button">See recipe</button>
</div>
      </div>`;
contParentCard.insertAdjacentHTML("beforeend", murkup)

    }
   
      
  };




  updateQuantityCards();

  function getRatingColorClass(rating, stars) {
    if (rating >= stars) {
      return "filters-icon-rating-yellow-" + stars;
    } else {
      return "filters-icon-rating-black";
    }
  }
  

  function combineContainers() {
    if (window.innerWidth >= 768) {

     
      const filtersContainer = document.querySelector('.filters-container');
      const popularContainer = document.querySelector('.popular-container');
      const categoriesContainer = document.querySelector('.categories-container');

      const newContainer = document.createElement('div');
      newContainer.className = 'new-container';


      newContainer.appendChild(categoriesContainer);
      newContainer.appendChild(popularContainer);
      filtersContainer.insertAdjacentElement("afterbegin",newContainer )
    } else { return
   
    }
  }
  combineContainers();

  

// ------------------------------------------------------------------------------Поиск по категориям
// 
function makeMurkup (category) {
  const murkup = `<li><button class="categories-list-btn">${category}</button></li>`
  gallery.insertAdjacentHTML("beforeend", murkup)


  // const btnCategory = document.querySelector(".categories-list-btn");

  };


  gallery.addEventListener("click", e => {
    console.log(e.target.textContent)
    const nameCategory = e.target.textContent;
    sortingCategory(nameCategory)
    })
  

    

function sortingCategory (category) {
  btnAllCategories.classList.add("categories-btn-disable")
  contParentCard.innerHTML = '';
  axios.get(`https://tasty-treats-backend.p.goit.global/api/recipes?category=${category}&page=${
    backendReturnDataFiltersForm.page
  }&limit=${backendReturnDataFiltersForm.limit}`).then(res => {
    // console.log(res.data.results)
    backendReturnDataFiltersForm.category = category;
    res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
      createRecipeContainers(1, _id, title, description, rating, preview, category)
      const iconsHeartActive = document.querySelectorAll(".filters-icon-heart");
// console.log(iconsHeartActive);
iconsHeartActive.forEach(icon => {
  // console.log(icon.parentNode.id)
  makeHeartActive(icon.parentNode.id, icon)
})
    })
  })
};


selectIngredients.addEventListener("change", (e) => {
  btnAllCategories.classList.add("categories-btn-disable")
  backendReturnDataFiltersForm.ingredient = e.target.value;
  console.log(e.target.value)
  console.log(backendReturnDataFiltersForm.ingredient)
  contParentCard.innerHTML = '';
  // console.log(backendReturnDataFiltersForm.category)
  backendReturnDataFiltersForm.searchFilterRecipes().then(res => {
    // console.log(res)
    res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
      createRecipeContainers(1, _id, title, description, rating, preview, category);
      const iconsHeartActive = document.querySelectorAll(".filters-icon-heart");
// console.log(iconsHeartActive);
iconsHeartActive.forEach(icon => {
  // console.log(icon.parentNode.id)
  makeHeartActive(icon.parentNode.id, icon)
})
    })
  })
})

selectArea.addEventListener("change", (e) => {
  btnAllCategories.classList.add("categories-btn-disable")
  console.log(e.target.value)
  backendReturnDataFiltersForm.area = e.target.value;
  contParentCard.innerHTML = '';
  backendReturnDataFiltersForm.searchFilterRecipes().then(res => {
    // console.log(res)
    res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
      createRecipeContainers(1, _id, title, description, rating, preview, category);
      const iconsHeartActive = document.querySelectorAll(".filters-icon-heart");
// console.log(iconsHeartActive);
iconsHeartActive.forEach(icon => {
  // console.log(icon.parentNode.id)
  makeHeartActive(icon.parentNode.id, icon)
})
    })
  })
  
});

selectTime.addEventListener("change", (e) => {
  btnAllCategories.classList.add("categories-btn-disable")
  console.log(e.target.value)
  backendReturnDataFiltersForm.time = parseInt(e.target.value, 10);
  contParentCard.innerHTML = '';
  backendReturnDataFiltersForm.searchFilterRecipes().then(res => {
    // console.log(res)
    res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
      createRecipeContainers(1, _id, title, description, rating, preview, category);
      const iconsHeartActive = document.querySelectorAll(".filters-icon-heart");
// console.log(iconsHeartActive);
iconsHeartActive.forEach(icon => {
  // console.log(icon.parentNode.id)
  makeHeartActive(icon.parentNode.id, icon)
})
    })
  })
  
})



const handleSearchInput = debounce(() => {
  btnAllCategories.classList.add("categories-btn-disable")
  const searchText = inputSearch.value.trim();

  if(searchText !== "") {
    backendReturnDataFiltersForm.title = searchText;
    contParentCard.innerHTML = '';
    backendReturnDataFiltersForm.searchFilterRecipes().then(res => {
      // console.log(res)
      res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
        createRecipeContainers(1, _id, title, description, rating, preview, category);
        const iconsHeartActive = document.querySelectorAll(".filters-icon-heart");
// console.log(iconsHeartActive);
iconsHeartActive.forEach(icon => {
  // console.log(icon.parentNode.id)
  makeHeartActive(icon.parentNode.id, icon)
})
      })
    }).catch((error) => {
      console.error("Произошла ошибка при запросе:", error);
    });
  } else {
    contParentCard.innerHTML = '';
    backendReturnDataFiltersForm.title = '';
    backendReturnDataFiltersForm.searchFilterRecipes().then(res => {
      // console.log(res)
      res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
        createRecipeContainers(1, _id, title, description, rating, preview, category);
        const iconsHeartActive = document.querySelectorAll(".filters-icon-heart");
// console.log(iconsHeartActive);
iconsHeartActive.forEach(icon => {
  // console.log(icon.parentNode.id)
  makeHeartActive(icon.parentNode.id, icon)
})
      })
    }).catch((error) => {
      console.error("Произошла ошибка при запросе:", error);
    });

  }

}, 500)

inputSearch.addEventListener("input", handleSearchInput);

btnResetFilers.addEventListener("click",  updateQuantityCards)



// --------------------------------------------------------------------ДОБАВЛЕНИЕ КАРТОЧКИ В ЛОКАЛ СТОРАДЖС
let favoritiesRecipes = [];
const storedFavorites = localStorage.getItem('favoritiesRecipes');
document.addEventListener('DOMContentLoaded', () => {
  const storedFavorites = localStorage.getItem('favoritiesRecipes');

  if (storedFavorites) {
    favoritiesRecipes = JSON.parse(storedFavorites);
    
  }

});

// console.log(storedFavorites)



contParentCard.addEventListener("click", e => {
  // console.log(e.target.parentNode)
  const svgHeart = e.target.parentNode;
  svgHeart.classList.toggle("filters-icon-heart-toggle")

  const parentSvgHeart = svgHeart.parentNode;
const iconHeart = parentSvgHeart.querySelector(".filters-icon-heart");
const titleCard = parentSvgHeart.querySelector(".filters-title-recipe");
const descriptionCard = parentSvgHeart.querySelector(".filters-description-recipe");
const numberRatingCard = parentSvgHeart.querySelector(".filters-rating-recipe");
const data = parentSvgHeart.getAttribute("data-category")
// console.log(parentSvgHeart)
const urlForPreview = parentSvgHeart.style.backgroundImage;
  // console.log(parentSvgHeart)
  const parentSvgHeaartData = {
    _id: parentSvgHeart.id,
    title: titleCard.textContent,
    description: descriptionCard.textContent,
    rating: numberRatingCard.textContent,
    preview: urlForPreview.match(/url\(['"]?([^'"]+)['"]?\)/)[1],
    category: data
  }
  
  if(svgHeart.classList.contains("filters-icon-heart-toggle")) {
    
    const isRecipeAlreadyAdded = favoritiesRecipes.some(item => item._id === parentSvgHeaartData._id);
    if (!isRecipeAlreadyAdded) {
      favoritiesRecipes.push(parentSvgHeaartData);
      localStorage.setItem('favoritiesRecipes', JSON.stringify(favoritiesRecipes));
    }
    // favoritiesRecipes.push(parentSvgHeaartData)
  } else {
    favoritiesRecipes = favoritiesRecipes.filter(item => item._id !== parentSvgHeaartData._id);
    localStorage.setItem('favoritiesRecipes', JSON.stringify(favoritiesRecipes))
  }
}
);







// contParentCard.addEventListener("click", e => {
//   console.log(e.target.parentNode.parentNode.id)
//   backendReturnDataFiltersForm.recipeID = e.target.parentNode.parentNode.id
//   backendReturnDataFiltersForm.searchRecipeID().then(res => {
//     console.log(res.data)
//   }) 
// })