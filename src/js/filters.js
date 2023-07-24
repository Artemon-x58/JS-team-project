import { BackendAPI } from '../js/tasty-backend-api'
import axios from 'axios';
 


 



// console.log(`╔═══╗╔═══╗╔══╗─╔══╗╔═══╗╔══╗╔════╗───╔═══╗╔═══╗╔══╗╔╗╔╗╔═══╗───╔══╗───
// ║╔═╗║║╔═╗║║╔╗║─╚╗╔╝║╔══╝║╔═╝╚═╗╔═╝───║╔══╝║╔═╗║║╔╗║║║║║║╔═╗║───║╔═╝───
// ║╚═╝║║╚═╝║║║║║──║║─║╚══╗║║────║║─────║║╔═╗║╚═╝║║║║║║║║║║╚═╝║───║╚═╗───
// ║╔══╝║╔╗╔╝║║║║╔╗║║─║╔══╝║║────║║─────║║╚╗║║╔╗╔╝║║║║║║║║║╔══╝───╚═╗║───
// ║║───║║║║─║╚╝║║╚╝╚╗║╚══╗║╚═╗──║║─────║╚═╝║║║║║─║╚╝║║╚╝║║║──────╔═╝║───
// ╚╝───╚╝╚╝─╚══╝╚═══╝╚═══╝╚══╝──╚╝─────╚═══╝╚╝╚╝─╚══╝╚══╝╚╝──────╚══╝───

// ╔═══╗╔═══╗╔═══╗╔══╗╔═══╗╔╗─╔╗╔════╗╔═══╗╔══╗───────
// ║╔═╗║║╔═╗║║╔══╝║╔═╝║╔══╝║╚═╝║╚═╗╔═╝║╔══╝║╔╗╚╗──────
// ║╚═╝║║╚═╝║║╚══╗║╚═╗║╚══╗║╔╗─║──║║──║╚══╗║║╚╗║──────
// ║╔══╝║╔╗╔╝║╔══╝╚═╗║║╔══╝║║╚╗║──║║──║╔══╝║║─║║──────
// ║║───║║║║─║╚══╗╔═╝║║╚══╗║║─║║──║║──║╚══╗║╚═╝║╔╗╔╗╔╗
// ╚╝───╚╝╚╝─╚═══╝╚══╝╚═══╝╚╝─╚╝──╚╝──╚═══╝╚═══╝╚╝╚╝╚╝


// (=^･^=) Demian
// (•‿•) Ostap
// (•‿•) Taras Savchenko
// (=^-ω-^=) Vladylsav Hrynevskyi
// (¬‿¬) Yaroslav Hryshenko
// (ʘ‿ʘ) Andrii Bondar
// (•‿•) Artem Melnyk
// (｡♥‿♥｡) Kostya Zinchenko
// ( ˘▽˘) Mykola Lyman
// (•ω•) Pavel Nekrasov
// (｡♥‿♥｡) Svetlana Yurikova
// (¬‿¬) Taras Demchenko
// (•ω•) Ustim Karpyuk
// `)
 

const selectedOptions = {
  ingredient: null,
  area: null,
  time: null,
};

function handleSelection(dropdown, buttonsDesign, message, key) {
  const options = dropdown.options;
  const initialColor = window.getComputedStyle(buttonsDesign).color;

  // Применяем цвет по умолчанию к всем опциям
  for (let i = 0; i < options.length; i++) {
    options[i].style.color = initialColor;
  }

  // Применяем выбранный цвет к выбранной опции
  const selectedOption = options[dropdown.selectedIndex];
  selectedOption.style.color = 'black';

  // Также меняем цвет текста в окошке с закрытым списком
  buttonsDesign.style.color = 'black';

  // Обновляем выбранные опции в объекте
  selectedOptions[key] = selectedOption.value; // Используем значение (число) вместо текста

  // Формируем строку для вывода в консоль
  let selectedValues = [];
  for (const optionKey in selectedOptions) {
    if (selectedOptions[optionKey]) {
      selectedValues.push(`${optionKey}: ${selectedOptions[optionKey]}`);
    }
  }

  // Выводим результат выбора в консоль
  console.log(selectedValues.join(", "));

  // Вызываем функцию displayRecipes() с выбранными опциями
  displayRecipes(selectedOptions.ingredient, selectedOptions.area, selectedOptions.time);
}


    // Кнопка ИНГРИДИЕНТ ********************************
    const dropdown = document.querySelector('.filter-list');
    const buttons = document.getElementsByClassName('button-ingrid');

    dropdown.addEventListener('change', function() {
      handleSelection(dropdown, buttons[0], "Выбран ингредиент", "ingredient");
    });

    // AREA КНОПКА *************************************
    const dropdownArea = document.querySelector('.filter-list-area');
    const buttonsArea = document.querySelector('.buttons-design-area');

    dropdownArea.addEventListener('change', function() {
      handleSelection(dropdownArea, buttonsArea, "Выбрана область", "area");
    });

    // ТАЙМ КНОПКА *************************************
    const dropdownTime = document.querySelector('.filter-list-time');
    const buttonsTime = document.querySelector('.buttons-design-time');

    dropdownTime.addEventListener('change', function() {
      handleSelection(dropdownTime, buttonsTime, "Выбрано время", "time");
    });

    // Стрелка меняется на крестик и сбрасывает выбор
    document.getElementById('dropdown').addEventListener('change', function() {
      var arrowIcon = document.getElementById('arrow-icon');
      var crossIcon = document.getElementById('cross-icon');

      if (this.value !== '') {
        arrowIcon.style.display = 'none';
        crossIcon.style.display = 'block';
      } else {
        arrowIcon.style.display = 'block';
        crossIcon.style.display = 'none';
      }
    });

    document.getElementById('dropdownArea').addEventListener('change', function() {
      var arrowIcon = document.getElementById('arrow-area');
      var crossIcon = document.getElementById('cross-icon-area');

      if (this.value !== '') {
        arrowIcon.style.display = 'none';
        crossIcon.style.display = 'block';
      } else {
        arrowIcon.style.display = 'block';
        crossIcon.style.display = 'none';
      }
    });

    document.getElementById('dropdownTime').addEventListener('change', function() {
      var arrowIcon = document.getElementById('arrow-time');
      var crossIcon = document.getElementById('cross-icon-time');

      if (this.value !== '') {
        arrowIcon.style.display = 'none';
        crossIcon.style.display = 'block';
      } else {
        arrowIcon.style.display = 'block';
        crossIcon.style.display = 'none';
      }
    });
 
    // Сброс всей хни
    document.getElementById('cross-icon').addEventListener('click', function() {
      document.getElementById('dropdown').selectedIndex = 0;
  document.getElementById('arrow-icon').style.display = 'block';
  document.getElementById('cross-icon').style.display = 'none';

  const buttons = document.getElementsByClassName('button-ingrid');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = 'rgba(5, 5, 5, 0.5)';
  }

  const options = dropdown.options;
  const initialColor = window.getComputedStyle(buttons[0]).color;
  for (let i = 0; i < options.length; i++) {
    options[i].style.color = initialColor;
  }

  // Выводим результат сброса в консоль
  console.log("Сброс выбора");
 

      // Вызываем функцию displayRecipes() после сброса, чтобы показать все рецепты
      displayRecipes();
    });

    document.getElementById('cross-icon-area').addEventListener('click', function() {
        document.getElementById('dropdownArea').selectedIndex = 0;
  document.getElementById('arrow-area').style.display = 'block';
  document.getElementById('cross-icon-area').style.display = 'none';

  const buttonsArea = document.querySelector('.buttons-design-area');
  buttonsArea.style.color = 'rgba(5, 5, 5, 0.5)';

  const options = dropdownArea.options;
  const initialColorArea = window.getComputedStyle(buttonsArea).color;
  for (let i = 0; i < options.length; i++) {
    options[i].style.color = initialColorArea;
  }
 console.log("Сброс выбора области");

      // Вызываем функцию displayRecipes() после сброса, чтобы показать все рецепты
      displayRecipes();
    });

    document.getElementById('cross-icon-time').addEventListener('click', function() {
document.getElementById('dropdownTime').selectedIndex = 0;
  document.getElementById('arrow-time').style.display = 'block';
  document.getElementById('cross-icon-time').style.display = 'none';

  const buttonsTime = document.querySelector('.buttons-design-time');
  buttonsTime.style.color = 'rgba(5, 5, 5, 0.5)';

  const options = dropdownTime.options;
  const initialColorTime = window.getComputedStyle(buttonsTime).color;
  for (let i = 0; i < options.length; i++) {
    options[i].style.color = initialColorTime;
  }

  // Выводим результат сброса в консоль
  console.log("Сброс выбора времени");

      // Вызываем функцию displayRecipes() после сброса, чтобы показать все рецепты
      displayRecipes();
    });

    // Define initial colors
    const initialColor = window.getComputedStyle(buttons[0]).color;
    const initialColorArea = window.getComputedStyle(buttonsArea).color;
    const initialColorTime = window.getComputedStyle(buttonsTime).color;

    function resetFilters() {
      document.getElementById('dropdownArea').selectedIndex = 0;
  document.getElementById('arrow-area').style.display = 'block';
  document.getElementById('cross-icon-area').style.display = 'none';
  const optionsArea = document.getElementById('dropdownArea').options;
  for (let i = 0; i < optionsArea.length; i++) {
    optionsArea[i].style.color = initialColorArea;
  }
  buttonsArea.style.color = 'rgba(5, 5, 5, 0.5)';

  // ИНГРИДИЕНТС
  document.getElementById('dropdown').selectedIndex = 0;
  document.getElementById('arrow-icon').style.display = 'block';
  document.getElementById('cross-icon').style.display = 'none';
  const options = document.getElementById('dropdown').options;
  for (let i = 0; i < options.length; i++) {
    options[i].style.color = initialColor;
  }
  const buttons = document.getElementsByClassName('button-ingrid');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = 'rgba(5, 5, 5, 0.5)';
  }

  // ТАЙМ КНОПКА
  document.getElementById('dropdownTime').selectedIndex = 0;
  document.getElementById('arrow-time').style.display = 'block';
  document.getElementById('cross-icon-time').style.display = 'none';
  const optionsTime = document.getElementById('dropdownTime').options;
  for (let i = 0; i < optionsTime.length; i++) {
    optionsTime[i].style.color = initialColorTime;
  }
  buttonsTime.style.color = 'rgba(5, 5, 5, 0.5)';

      // Вызываем функцию displayRecipes() после сброса, чтобы показать все рецепты
      displayRecipes();
    }

    // Обработчик события для кнопки "Reset the filter"
    document.getElementById('resetButton').addEventListener('click', resetFilters);



    // РАБОТА С БЭКЕНДОМ*******************************
    const backendReturnData = new BackendAPI();
    // ... (предыдущий код без изменений) ...

 
    // ПОЛУЧАЕМ СПИСОК СТРАН ДЛЯ ФИЛЬТРА
    async function displayAreas() {
    try {
    const respArea = await backendReturnData.searchAreas();
      const areasData = respArea.data;
      
      console.log(respArea)
    // Находим выпадающий список по его id
    const dropdownArea = document.getElementById('dropdownArea');

    // Создаем опции для выпадающего списка из данных, полученных из бэкэнда
    for (const area of areasData) {
      const option = document.createElement('option');
      option.textContent = area.name; // Обращаемся к свойству name объекта area
      dropdownArea.appendChild(option);
    }
  } catch (error) {
    console.error("Error fetching areas:", error);
  }
}

    displayAreas();

    // TIME options СПИСОК ВАРИАНТОВ ВРЕМЕНИ
    const timeBorders = {
      // key2: 10,
      // key3: 20,
      // key4: 30,
      // key5: 40,
      // key6: 50,
      // key7: 60,
      // key8: 70,
      // key9: 80,
      // key10: 90

      key2: 5,
      key3: 10,
      key4: 15,
      key5: 20,
      key6: 25,
      key7: 30,
      key8: 35,
      key9: 40,
      key10: 45,
      key11: 50,
      key12: 55,
      key13: 60,
      key14: 65,
      key15: 70,
      key16: 75,
      key17: 80,
      key18: 85,
      key19: 90,
      key20: 95,
      key21: 100,
      key22: 105,
      key23: 110,
      key24: 115,
      key25: 120,
        };

    const dropdownTimeOptions = document.getElementById('dropdownTime');

    // Создаем опции для выпадающего списка из объекта timeBorders
    for (const key in timeBorders) {
      if (timeBorders.hasOwnProperty(key)) {
        const option = document.createElement('option');
        option.textContent = `${timeBorders[key]} min`;
        option.value = timeBorders[key];
        dropdownTime.appendChild(option);
      }
} 
 
 
        
    // Добавляем ингредиенты в фильтр
   const respIngrid = backendReturnData.searchingredients()
  .then(resp => {
    const ingredientsData = resp.data;

    // Отсортируйте список ингредиентов по алфавиту
    const sortedIngredients = ingredientsData.sort((a, b) => a.name.localeCompare(b.name));

    const dropdown = document.getElementById('dropdown'); // Находим выпадающий список по его id
    if (!dropdown) {
      console.error("Выпадающий список '.dropdown' не найден на странице.");
      return;
    }

    // Создаем опции для выпадающего списка из данных, полученных из бэкэнда
    for (const ingredient of sortedIngredients) { // Используем отсортированный список
      const name = ingredient.name;

      // Создаем элемент option для опции выпадающего списка
      const option = document.createElement('option');
      option.textContent = name; // Задаем текстовое содержимое опции

      // Добавляем опцию в выпадающий список
      dropdown.appendChild(option);
    }
  })
  .catch(console.warn);
 
     // РАБОТА С ВЫВОДОМ ИНФОРМАЦИИ В КАРТОЧКИ
 
 
////////////////////////////
 



async function displayRecipes(selectedIngredient, selectedArea, selectedTime) {
  try {
    const respIngredients = await backendReturnData.searchingredients();
    const ingredientsData = respIngredients.data;
    const ingredientsInfo = {};
 

    // Создаем объект для хранения соответствий идентификаторов и названий ингредиентов
    ingredientsData.forEach(ingredient => {
      ingredientsInfo[ingredient._id] = ingredient.name;
    });

    const response = await backendReturnData.searchAllRecipes();
    console.log("Ответ от API:", response.data);

    const container = document.querySelector('.pirog');
    if (!container) {
      console.error("Контейнер '.pirog' не найден на странице.");
      return;
    }
    container.innerHTML = '';

    const recipes = response.data.results;
    recipes.forEach((recipe) => {
      const area = recipe.area;
      const title = recipe.title;
      const category = recipe.category;
      const time = recipe.time;
      const rating = recipe.rating;
      const tags = recipe.tags;
      const imgLink = recipe.preview;
      const descrFood = recipe.description;

      
      // Получаем и выводим имена ингредиентов (если они есть)
      const ingredientsIds = recipe.ingredients;
      let ingredientsString = '';

      for (const ingredient of ingredientsIds) {
        const ingredientName = ingredientsInfo[ingredient.id];
        if (ingredientName) {
          ingredientsString += ingredientName + ' ';
        }
      }

      console.log(`AREA ${area},TITEL ${title},CATEGORY ${category}, TIME ${time}, RATING ${rating},TAG ${tags},IMG  ${imgLink},DESCR ${descrFood}  INGRID ${ingredientsString}`);

      // Преобразование значения selectedTime в цифровое значение без приставки "min"
      const selectedTimeValue = parseInt(selectedTime);

      // Проверяем, соответствуют ли рецепт выбранным параметрам
            
     if  (
  (!selectedIngredient || ingredientsIds.some(ingredient => ingredientsInfo[ingredient.id] === selectedIngredient)) &&
  (!selectedArea || area === selectedArea) &&
  (!selectedTimeValue || parseInt(time) <= selectedTimeValue)
)
     
    
      {
        // Создаем элемент карточки для каждого рецепта
        const card = document.createElement('div');
        card.classList.add('book-card');

        card.innerHTML =
          `
        <div class="card-container">
          <div class="card-position">
            <div class="img-background-cards">
              <img
                src="${imgLink}"
                alt="${title}"
                height="335"
                width="335"
                class="cards-with-recept"
              />
            </div>

            <div class="elements-on-cards">
              <svg class="card-favorits-heart">
                <use href="../img/symbol-defs.svg#icon-heart-off"></use>
              </svg>

              <h2 class="cards-title">${title}</h2>
              <div class="cards-text-container">
                <p class="cards-descript"> ${descrFood} </p>
              </div>

              <div class="cards-bottom-part">
                <div><p class="card-numb-rait">${rating}</p></div>
                <div>
                  <ul class="raiting-order-row">
                    <li>
                      <svg class="raiting-stars">
                        <use href="../img/symbol-defs.svg#icon-star"></use>
                      </svg>
                    </li>
                    <li>
                      <svg class="raiting-stars">
                        <use href="../img/symbol-defs.svg#icon-star"></use>
                      </svg>
                    </li>
                    <li>
                      <svg class="raiting-stars">
                        <use href="../img/symbol-defs.svg#icon-star"></use>
                      </svg>
                    </li>
                    <li>
                      <svg class="raiting-stars">
                        <use href="../img/symbol-defs.svg#icon-star"></use>
                      </svg>
                    </li>
                    <li>
                      <svg class="raiting-stars">
                        <use href="../img/symbol-defs.svg#icon-star"></use>
                      </svg>
                    </li>
                  </ul>
                </div>

                <div>
                  <button class="card-button">See recipe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;

        // Добавляем карточку рецепта в контейнер
        container.appendChild(card);
      }
    });
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

displayRecipes();

 