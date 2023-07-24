const categories = [
  { _id: '6462a6cd4c3d0ddd28897f8e', name: 'Beef' },
  { _id: '6462a6cd4c3d0ddd28897f95', name: 'Breakfast' },
  { _id: '6462a6cd4c3d0ddd28897f8d', name: 'Chicken' },
];

export function createButtons() {
  return categories
    .map(({ name }) => `<button type="button" class="">${name}</button>`)
    .join('');
}
