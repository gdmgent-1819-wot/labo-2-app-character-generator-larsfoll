const db = firebase.database();

const colorPicker = document.getElementById('color-picker');
const characterGeneratorWrapper = document.getElementById('character-generator-wrapper');

const colorsArray = [];
for(let i = 1; i <= 64; i++) {
  colorsArray.push('rgb(255, 255, 255)');
}

const clickableGrid = (rows, cols) => {
  var i = 0;
  const grid = document.createElement('table');
  grid.className = 'grid';
  for (let r = 0; r < rows; ++r) {
    const tr = grid.appendChild(document.createElement('tr'));
    for (let c = 0; c < cols; ++c) {
      const cell = tr.appendChild(document.createElement('td'));
      cell.style.backgroundColor = 'rgb(255, 255, 255)';
      ++i;
      cell.addEventListener('click', ((el, r, c, i) => {
        return () => {
          const chosenColor = colorPicker.value;
          el.style.backgroundColor == 'rgb(255, 255, 255)' ?
          el.style.backgroundColor = `#${chosenColor}` :
          el.style.backgroundColor = 'rgb(255, 255, 255)';
          let firebaseValue = el.style.backgroundColor.substr(4).slice(0, -1);
          firebaseValue = `[${firebaseValue}]`;
          setColor(i, firebaseValue);
        }
      })(cell, r, c, i), false);
    }
  }
  return grid;
}

const setColor = (index, color) => {
  colorsArray[index-1] = color;
  db.ref('characters/').set({character: colorsArray});
}

const grid = clickableGrid(8, 8);
characterGeneratorWrapper.appendChild(grid);
