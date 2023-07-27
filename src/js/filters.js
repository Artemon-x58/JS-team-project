import debounce from "lodash.debounce";
import 'tui-pagination';
import Pagination from 'tui-pagination';
import { BackendAPI } from './tasty-backend-api';
import linkIcons from "../img/symbol-defs.svg"
import axios from "axios";


const backendReturnDataFiltersForm = new BackendAPI();

axios.get(`https://tasty-treats-backend.p.goit.global/api/categories`).then(res => {
    
const categories = res.data;
    categories.forEach(category => {
        makeMurkup(category.name)
    });
}).catch((error) => {
  console.error("Произошла ошибка при запросе:", error);
});

const gallery = document.querySelector(".categories-wrapper")
const selectTime = document.querySelector("#time");
const selectArea = document.querySelector(".filters-select-area");
const selectIngredients = document.querySelector(".filters-select-ingredients");
const inputSearch = document.querySelector(".filters-input");
const btnResetFilers = document.querySelector(".filters-reset-btn");
const btnAllCategories = document.querySelector(".categories-btn")
const contParentCard = document.querySelector(".filters-box-parent");
const divPagination = document.querySelector("#tui-pagination-container")
const noResults = document.querySelector(".no-results");
const loader = document.querySelector(".loader");
const filtersBoxTimeArea = document.querySelector(".filters-box-time-area")
const areaLabel = document.querySelector(".filters-label-area")
const formFiltr = document.querySelector(".filters-form")
const addBtnModal = document.querySelector(".ab-add-to-favorite")






backendReturnDataFiltersForm.searchAreas().then(res => {
    const sortedArea = res.data.sort((a, b) => a.name.localeCompare(b.name));
    sortedArea.forEach(({_id, name}) => {
        createOptionsArea(_id, name)
    })
}).catch((error) => {
  console.error("Произошла ошибка при запросе:", error);
});

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
        createOptionsIngredients(_id, name)
    })
}).catch((error) => {
  console.error("Произошла ошибка при запросе:", error);
});

function createOptionsIngredients (id, name) {
    const option = document.createElement("option");
    option.classList.add("option-ingredients")
    option.value = id;
    option.textContent = name;
    selectIngredients.appendChild(option);
    }

// --------------------------------------------------------------ЛОГИКА ДОБАВЛЕНИЯ КАРТОЧЕК В КОНТЕЙНЕР

const mediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1280px)');

function handleMediaQueryChange(event) {
  if (event.matches) {
    return 3
  } else if (window.matchMedia('(min-width: 1280px)').matches) {
    return 3
  } else {
    return 2
  }
}

mediaQuery.addListener(handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);



function madeFirstPagination (quantity, newTotalItems, newItemsPerPage) {
  backendReturnDataFiltersForm.searchFilterRecipes().then(res => {
    if(quantity <= 1) {
      divPagination.style.display = "none"
    }
    else {    
      divPagination.style.display = "unset"
    }
    
    const newItemsPerPage = backendReturnDataFiltersForm.limit;
  const newTotalItems = res.data.totalPages * res.data.perPage;
    const pagination1 = new Pagination('tui-pagination-container', {
      totalItems: newTotalItems,
      itemsPerPage: newItemsPerPage,
      visiblePages: 2,
      page: backendReturnDataFiltersForm.page,
    });
   
    pagination1.on('beforeMove', evt => {
      backendReturnDataFiltersForm.page = evt.page;
      contParentCard.innerHTML = '';
      backendReturnDataFiltersForm.searchFilterRecipes().then(res => {
          res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
              createRecipeContainers(1, _id, title, description, rating, preview, category);
          })
      }).catch(error => {
          console.error('Произошла ошибка при запросе:', error);
      });

    });
  }).catch((error) => {
    console.error("Произошла ошибка при запросе:", error);
  });
}

btnAllCategories.addEventListener("click", updateQuantityCards)

function updateQuantityCards() {
  noResults.classList.add("visually-hidden");
  loader.removeAttribute("hidden")

  contParentCard.innerHTML = '';
  selectTime.selectedIndex = 0;
  selectArea.selectedIndex = 0;
  selectIngredients.selectedIndex = 0;
  inputSearch.value = "";
  backendReturnDataFiltersForm.page = 1;
  backendReturnDataFiltersForm.title = '';
  backendReturnDataFiltersForm.time = '';
  backendReturnDataFiltersForm.area = '';
  backendReturnDataFiltersForm.ingredient = '';
  backendReturnDataFiltersForm.category = '';
  
  btnAllCategories.classList.remove("categories-btn-disable")
backendReturnDataFiltersForm.searchFilterRecipes().then(res => {
  const quantity =  res.data.results.length;
    if(quantity === 0) {
      noResults.classList.remove("visually-hidden");
    } else {
      noResults.classList.add("visually-hidden");
    }
  loader.setAttribute("hidden", "true")
  madeFirstPagination(res.data.totalPages, res.data.totalPages * res.data.perPage, backendReturnDataFiltersForm.limit)
    res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
        createRecipeContainers(1, _id, title, description, rating, preview, category);
    })
    const iconsHeartActive = document.querySelectorAll(".filters-icon-heart");
iconsHeartActive.forEach(icon => {
  makeHeartActive(icon.parentNode.id, icon)
})
}).catch(error => {
    console.error('Произошла ошибка при запросе:', error);
});
}

function makeHeartActive (cardId, icon) {
const localLibrary = localStorage.getItem("favoritiesRecipes")
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
updateQuantityCards();
function createRecipeContainers(numContainers, _id, title, description, rating, preview, category) {
    for (let i = 0; i < numContainers; i++) {
        
    
    const murkup = `<div id="${_id}" data-category="${category}" class="filters-box-child" style="background-image: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 0%, rgba(5, 5, 5, 0.00) 100%), url('${preview}'); background-size: cover; background-position: center;">
        <svg class="filters-icon-heart">
            <use href="${linkIcons}#icon-heart"></use>
        </svg>
        <h2 class="filters-title-recipe">${title}</h2>
        <p class="filters-description-recipe">${description}</p>
        <div class="filters-rating-wrap">
  <p class="filters-rating-recipe">${rating.toFixed(1)}</p>
  <svg class="filters-icon-rating-recipe-1 ${getRatingColorClass(rating, 1)}">
    <use href="${linkIcons}#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-2 ${getRatingColorClass(rating, 2)}">
    <use href="${linkIcons}#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-3 ${getRatingColorClass(rating, 3)}">
    <use href="${linkIcons}#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-4 ${getRatingColorClass(rating, 4)}">
    <use href="${linkIcons}#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-5 ${getRatingColorClass(rating, 5)}">
    <use href="${linkIcons}#icon-star"></use>
  </svg>
  <button class="filters-btn-recipe" type="button">See recipe</button>
</div>
      </div>
      `;
contParentCard.insertAdjacentHTML("beforeend", murkup)
    }
  };


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
  };


  gallery.addEventListener("click", e => {
    const nameCategory = e.target.textContent;
    sortingCategory(nameCategory)
    })
  

function sortingCategory (category) {
  noResults.classList.add("visually-hidden");
  loader.removeAttribute("hidden")
  
  btnAllCategories.classList.add("categories-btn-disable")
  contParentCard.innerHTML = '';
  backendReturnDataFiltersForm.category = category;
  backendReturnDataFiltersForm.page = 1;
  
  backendReturnDataFiltersForm.searchFilterRecipes().then(res => {
    const quantity =  res.data.results.length;
    if(quantity === 0) {
      noResults.classList.remove("visually-hidden");
    } else {
      noResults.classList.add("visually-hidden");
    }
loader.setAttribute("hidden", "true")
    madeFirstPagination(res.data.totalPages, res.data.totalPages * res.data.perPage, backendReturnDataFiltersForm.limit)
    
    res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
      createRecipeContainers(1, _id, title, description, rating, preview, category)
      const iconsHeartActive = document.querySelectorAll(".filters-icon-heart");

iconsHeartActive.forEach(icon => {
  makeHeartActive(icon.parentNode.id, icon)
})
    })
  }).catch((error) => {
    console.error("Произошла ошибка при запросе:", error);
  });
};


selectIngredients.addEventListener("change", (e) => {
  noResults.classList.add("visually-hidden");
  loader.removeAttribute("hidden")
  
  btnAllCategories.classList.add("categories-btn-disable")
  if(e.target.firstElementChild.value === e.target.value) {
    backendReturnDataFiltersForm.ingredient = '';
  }
  else {
  backendReturnDataFiltersForm.ingredient = e.target.value;
}
backendReturnDataFiltersForm.page = 1;
  contParentCard.innerHTML = '';
  backendReturnDataFiltersForm.searchFilterRecipes().then(res => {
    const quantity =  res.data.results.length;
    if(quantity === 0) {
      noResults.classList.remove("visually-hidden");
    } else {
      noResults.classList.add("visually-hidden");
    }
loader.setAttribute("hidden", "true")
    
    madeFirstPagination(res.data.totalPages, res.data.totalPages * res.data.perPage, backendReturnDataFiltersForm.limit)

    res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
      createRecipeContainers(1, _id, title, description, rating, preview, category);
      const iconsHeartActive = document.querySelectorAll(".filters-icon-heart");
iconsHeartActive.forEach(icon => {
  makeHeartActive(icon.parentNode.id, icon)
})
    })
  }).catch((error) => {
    console.error("Произошла ошибка при запросе:", error);
  });
})

selectArea.addEventListener("change", (e) => {
  noResults.classList.add("visually-hidden");
  loader.removeAttribute("hidden");
  btnAllCategories.classList.add("categories-btn-disable")
  
  
  if(e.target.firstElementChild.value === e.target.value) {
    backendReturnDataFiltersForm.area = '';
  }
  else {
  backendReturnDataFiltersForm.area = e.target.value;
}
backendReturnDataFiltersForm.page = 1;
  contParentCard.innerHTML = '';
  backendReturnDataFiltersForm.searchFilterRecipes().then(res => {
   const quantity =  res.data.results.length;
    if(quantity === 0) {
      noResults.classList.remove("visually-hidden");
    } else {
      noResults.classList.add("visually-hidden");
    }
    
    
    loader.setAttribute("hidden", "true")

    madeFirstPagination(res.data.totalPages, res.data.totalPages * res.data.perPage, backendReturnDataFiltersForm.limit)

    res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
      createRecipeContainers(1, _id, title, description, rating, preview, category);
      const iconsHeartActive = document.querySelectorAll(".filters-icon-heart");
iconsHeartActive.forEach(icon => {
  makeHeartActive(icon.parentNode.id, icon)
})
    })
  }).catch((error) => {
    console.error("Произошла ошибка при запросе:", error);
  });
  
});

selectTime.addEventListener("change", (e) => {
  noResults.classList.add("visually-hidden");
  loader.removeAttribute("hidden")
  
  btnAllCategories.classList.add("categories-btn-disable")
  backendReturnDataFiltersForm.page = 1;
  contParentCard.innerHTML = '';
  if(e.target.firstElementChild.value === e.target.value) {
    backendReturnDataFiltersForm.time = '';

  }
  else {
  backendReturnDataFiltersForm.time = e.target.value;
  
}
  backendReturnDataFiltersForm.searchFilterRecipes().then(res => {
    const quantity =  res.data.results.length;
    if(quantity === 0) {
      noResults.classList.remove("visually-hidden");
    } else {
      noResults.classList.add("visually-hidden");
    }
loader.setAttribute("hidden", "true")
    madeFirstPagination(res.data.totalPages, res.data.totalPages * res.data.perPage, backendReturnDataFiltersForm.limit)

    res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
      createRecipeContainers(1, _id, title, description, rating, preview, category);
      const iconsHeartActive = document.querySelectorAll(".filters-icon-heart");
iconsHeartActive.forEach(icon => {
  makeHeartActive(icon.parentNode.id, icon)
})
    })
  }).catch((error) => {
    console.error("Произошла ошибка при запросе:", error);
  });
  
})


const handleSearchInput = debounce(() => {
  noResults.classList.add("visually-hidden");
  noResults.classList.add("visually-hidden");
  btnAllCategories.classList.add("categories-btn-disable")
  const searchText = inputSearch.value.trim();

  if(searchText !== "") {
    backendReturnDataFiltersForm.title = searchText;
    backendReturnDataFiltersForm.page = 1;
    contParentCard.innerHTML = '';
    backendReturnDataFiltersForm.searchFilterRecipes().then(res => {
      const quantity =  res.data.results.length;
    if(quantity === 0) {
      noResults.classList.remove("visually-hidden");
    } else {
      noResults.classList.add("visually-hidden");
    }
      madeFirstPagination(res.data.totalPages, res.data.totalPages * res.data.perPage, backendReturnDataFiltersForm.limit)
      res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
        createRecipeContainers(1, _id, title, description, rating, preview, category);
        const iconsHeartActive = document.querySelectorAll(".filters-icon-heart");
iconsHeartActive.forEach(icon => {
  makeHeartActive(icon.parentNode.id, icon)
})
      })
    }).catch((error) => {
      console.error("Произошла ошибка при запросе:", error);
    });
  } else {
    backendReturnDataFiltersForm.page = 1;
    contParentCard.innerHTML = '';
    backendReturnDataFiltersForm.title = '';
    backendReturnDataFiltersForm.searchFilterRecipes().then(res => {
      const quantity =  res.data.results.length;
    if(quantity === 0) {
      noResults.classList.remove("visually-hidden");
    } else {
      noResults.classList.add("visually-hidden");
    }
      
      res.data.results.forEach(({_id, title, description, rating, preview, category}) => {
        createRecipeContainers(1, _id, title, description, rating, preview, category);
        const iconsHeartActive = document.querySelectorAll(".filters-icon-heart");
iconsHeartActive.forEach(icon => {
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
document.addEventListener('DOMContentLoaded', () => {
  const storedFavorites = localStorage.getItem('favoritiesRecipes');
  if (storedFavorites) {
    favoritiesRecipes = JSON.parse(storedFavorites);
  }
});

// addBtnModal.addEventListener("click", e => {
//   console.log(e)
//   if( e.target.tagName !== "use" ) {
// return
//   }
//   const svgHeart = e.target.parentNode;
//   svgHeart.classList.toggle("filters-icon-heart-toggle")

//   const parentSvgHeart = svgHeart.parentNode;
// const iconHeart = parentSvgHeart.querySelector(".filters-icon-heart");
// const titleCard = parentSvgHeart.querySelector(".filters-title-recipe");
// const descriptionCard = parentSvgHeart.querySelector(".filters-description-recipe");
// const numberRatingCard = parentSvgHeart.querySelector(".filters-rating-recipe");
// const data = parentSvgHeart.getAttribute("data-category")
// const urlForPreview = parentSvgHeart.style.backgroundImage;
//   const parentSvgHeaartData = {
//     _id: parentSvgHeart.id,
//     title: titleCard.textContent,
//     description: descriptionCard.textContent,
//     rating: numberRatingCard.textContent,
//     preview: urlForPreview.match(/url\(['"]?([^'"]+)['"]?\)/)[1],
//     category: data
//   }
  
//   if(svgHeart.classList.contains("filters-icon-heart-toggle")) {
    
//     const isRecipeAlreadyAdded = favoritiesRecipes.some(item => item._id === parentSvgHeaartData._id);
//     if (!isRecipeAlreadyAdded) {
//       favoritiesRecipes.push(parentSvgHeaartData);
//       localStorage.setItem('favoritiesRecipes', JSON.stringify(favoritiesRecipes));
//     }
//   } else {
//     favoritiesRecipes = favoritiesRecipes.filter(item => item._id !== parentSvgHeaartData._id);
//     localStorage.setItem('favoritiesRecipes', JSON.stringify(favoritiesRecipes))
//   }
// }
// );


contParentCard.addEventListener("click", e => {
  if( e.target.tagName !== "use" ) {
return
  }
  const svgHeart = e.target.parentNode;
  svgHeart.classList.toggle("filters-icon-heart-toggle")

  const parentSvgHeart = svgHeart.parentNode;
const iconHeart = parentSvgHeart.querySelector(".filters-icon-heart");
const titleCard = parentSvgHeart.querySelector(".filters-title-recipe");
const descriptionCard = parentSvgHeart.querySelector(".filters-description-recipe");
const numberRatingCard = parentSvgHeart.querySelector(".filters-rating-recipe");
const data = parentSvgHeart.getAttribute("data-category")
const urlForPreview = parentSvgHeart.style.backgroundImage;
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
  } else {
    favoritiesRecipes = favoritiesRecipes.filter(item => item._id !== parentSvgHeaartData._id);
    localStorage.setItem('favoritiesRecipes', JSON.stringify(favoritiesRecipes))
  }
}
);



