function createTable() {
  var num_rows = document.querySelector('#rows').value;
  var num_cols = document.querySelector('#cols').value;
  var theader = '<table id="pixel-container">\n';
  var tbody = '';

  for (var i = 0; i < num_rows; i++) {
    tbody += '<tr type="row">';
    for (var j = 0; j < num_cols; j++) {
      tbody += '<td class="pixel">';
      tbody += '</td>'
    }
    tbody += '</tr>\n';
  }
  var tfooter = '</table>';
  document.querySelector('#pixel-container').innerHTML = theader + tbody + tfooter;
  revealPalette(true)
}


function revealPalette(show) {

  if (show) {
    document.querySelector('#palette').style.visibility = 'visible';
  } else{
    document.querySelector('#palette').style.visibility = 'hidden';
  }

}

var colorPickedCurrently = ''
var colorPicked = false

document.querySelector("#palette").addEventListener("click", pickColor);

function pickColor(event) {
  colorPickedCurrently = event.target.style.backgroundColor
  document.querySelector('#colorPicked').style.backgroundColor = colorPickedCurrently
  colorPicked = true
}

if (colorPicked = true) {
document.querySelector("#pixel-container").addEventListener("mouseover", paintColor);

function paintColor(event) {
  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = colorPickedCurrently
  }
}
}
