const db = firebase.database();

const colorPicker = document.getElementById('color-picker');
const characterGeneratorWrapper = document.getElementById('character-generator-wrapper');

const colorsArray = [];
for(let i = 1; i <= 64; i++) {
  colorsArray.push([0, 0, 0]);
}

const clickableGrid = (rows, cols) => {
  var i = 0;
  const grid = document.createElement('table');
  grid.className = 'grid';
  for (let r = 0; r < rows; ++r) {
    const tr = grid.appendChild(document.createElement('tr'));
    for (let c = 0; c < cols; ++c) {
      const cell = tr.appendChild(document.createElement('td'));
      cell.style.backgroundColor = 'rgb(0, 0, 0)';
      ++i;
      cell.addEventListener('click', ((el, r, c, i) => {
        return () => {
          const chosenColor = colorPicker.value;
          el.style.backgroundColor == 'rgb(0, 0, 0)' ?
          el.style.backgroundColor = `#${chosenColor}` :
          el.style.backgroundColor = 'rgb(0, 0, 0)';
          setColor(i);
        }
      })(cell, r, c, i), false);
    }
  }
  return grid;
}

let rgb = [255, 255, 255];

const update = (picker) => {
  const r = Math.round(picker.rgb[0]);
  const g = Math.round(picker.rgb[1]);
  const b = Math.round(picker.rgb[2]);
  rgb = [r, g, b];
}

const setColor = (index) => {
  colorsArray[index-1] = rgb;
  db.ref('characters/').set({character: colorsArray});
}

const grid = clickableGrid(8, 8);
characterGeneratorWrapper.appendChild(grid);
