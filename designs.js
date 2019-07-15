// Select color input
// Select size input
var height = document.getElementById('inputHeight').value;
var width = document.getElementById('inputWidth').value;
var color = document.getElementById('colorPicker').value;
var canvas = document.getElementById('pixelCanvas');
var size = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
makeGrid(height, width, color);
document.getElementById('submitForm').addEventListener('click', function(event) {
  event.preventDefault();
  height = document.getElementById('inputHeight').value;
  width = document.getElementById('inputWidth').value;
  color = document.getElementById('colorPicker').value;
  canvas.firstElementChild.remove();
  makeGrid(height, width, color);
});

function makeGrid(height, width, color) {
// Your code goes here!
height = document.getElementById('inputHeight').value;
width = document.getElementById('inputWidth').value;
canvas = document.getElementById('pixelCanvas');
canvas.innerHTML = "";
for (var rows = 1; rows <= height; rows++) {
  var row = document.createElement('tr');
  row.id = 'row-' + rows;
  canvas.appendChild(row);
  for (var columns = 1; columns <= width; columns++) {
    var column = document.createElement('td');
    column.id = 'row-' + row + '-' + columns;
    canvas.lastChild.appendChild(column);
    column.addEventListener('click', function(event) {
      color = document.getElementById('colorPicker').value;
      event.target.style.backgroundColor = color;
    })
  }
  };
}
