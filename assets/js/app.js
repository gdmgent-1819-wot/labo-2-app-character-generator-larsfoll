const colorPicker = document.getElementById('color-picker');
const characterGeneratorWrapper = document.getElementById('character-generator-wrapper');

const clickableGrid = (rows, cols) => {
  const grid = document.createElement('table');
  grid.className = 'grid';
  for (let r = 0; r < rows; ++r) {
    const tr = grid.appendChild(document.createElement('tr'));
    for (let c = 0; c < cols; ++c) {
      const cell = tr.appendChild(document.createElement('td'));
      cell.addEventListener('click', ((el, r, c) => {
        return () => {
          const chosenColor = colorPicker.value;
          const { backgroundColor } = cell.style;
          cell.style.backgroundColor == '' ?
          cell.style.backgroundColor = `#${chosenColor}` :
          cell.style.backgroundColor = '';
          submitBtn.backgroundColor = `#${chosenColor}`;
        }
      })(cell, r, c), false);
    }
  }
  return grid;
}

const grid = clickableGrid(8, 8);
characterGeneratorWrapper.appendChild(grid);
