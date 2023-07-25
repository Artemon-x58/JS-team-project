// const recipes = [
//   {
//     _id: '6462a8f74c3d0ddd28898040',
//     title: 'Burek',
//     description:
//       "Burek is a traditional Balkan pastry made with phyllo dough and a savory filling, usually of meat, cheese, or vegetables. It's a popular street food in the region and can be enjoyed as a snack or a meal.",
//     preview:
//       'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561437/n2azvqwqwoggte9tevai.jpg',
//     popularity: 518.7,
//   },
//   {
//     _id: '6462a8f74c3d0ddd28898046',
//     title: 'Fish fofos',
//     description:
//       'Fish fofos are a popular Portuguese dish of fish patties made with mashed potatoes, cod or hake, and herbs, fried until golden brown and crispy on the outside, soft and moist on the inside.',
//     preview:
//       'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561436/yb6szdkd5pj1izzevumw.jpg',
//     popularity: 495,
//   },
// ];

export function createCard(values) {
  return values
    .map(
      ({ title, description, preview, rating, id }) =>
        `<div class="kz-card-favorite" id="${id}" style="background: linear-gradient(1deg, rgba(5, 5, 5, 0.6) 0%, rgba(5, 5, 5, 0) 100%), url(${preview}), lightgray -25px -10px / 116.716% 114.018% no-repeat;">
          <button type="button" class="kz-btn-icon" data-recipe-id="${id}">
          <svg class="kz-favorite-icon" width="22" height="22">
          <use href="../../img/symbol-defs.svg#icon-heart"></use>
        </svg></button>
        <div class="kz-favorite-text-btn"><p class="kz-favorite-title">${title}</p>
      <p class="kz-favorite-description">${description}</p></div>
      <div class="kz-favorite-rating-btn">
      <div class="kz-rating-stars">
      <p class="kz-rating-number">${rating.toFixed(
        1
      )}</p><svg class="kz-star-icon unfulfill" width="18" height="18">
      <use href="../../img/symbol-defs.svg#icon-star"></use></svg><svg class="kz-star-icon" width="18" height="18"><use href="../../img/symbol-defs.svg#icon-star"></use></svg><svg class="kz-star-icon" width="18" height="18"><use href="../../img/symbol-defs.svg#icon-star"></use></svg><svg class="kz-star-icon" width="18" height="18"><use href="../../img/symbol-defs.svg#icon-star"></use></svg><svg class="kz-star-icon kz-star-empty-icon" width="18" height="18"><use href="../../img/symbol-defs.svg#icon-star"></use></svg></div>
      <button class="kz-btn-see-recipe">See recipe</button></div></div>`
    )
    .join('');
}
