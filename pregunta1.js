//Constantes Primera Pregunta
const formulario = document.getElementById('formulario');
const seccionOculta = document.getElementById('seccion-oculta');
const botonCierreOculto = document.getElementById('boton-cierre');

// Primera Pregunta.
  
formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();
  const respuesta = document.getElementById('respuesta').value;
  if (respuesta === 'Lógica es la técnica utilizada para desarrollar instrucciones en una secuencia para lograr determinado objetivo.​') {
    seccionOculta.style.display = 'block';
    formulario.style.display = 'none';
    const audioCorrecto = document.getElementById('audio-correcto');
    audioCorrecto.play();
  } else {
    alert('Respuesta incorrecta. Por favor, inténtalo de nuevo.');
  }
});

botonCierreOculto.addEventListener('click', function() {
  seccionOculta.style.display = 'none';
  formulario.style.display = 'block';
  formulario.reset();
});

// Fin primera pregunta

// Inicio de la actividad Unir
const terminos = document.querySelectorAll('.termino');
const definiciones = document.querySelectorAll('.definicion');
let terminoSeleccionado = null;
let definicionSeleccionada = null;
let actividadTerminada = false;
let terminosCorrectos = 0;

terminos.forEach((termino) => {
  termino.addEventListener('click', () => {
    if (actividadTerminada || termino.classList.contains('bloqueado')) {
      return;
    }

    if (terminoSeleccionado) {
      terminoSeleccionado.classList.remove('seleccionado');
    }

    terminoSeleccionado = termino;
    terminoSeleccionado.classList.add('seleccionado');

    if (definicionSeleccionada) {
      definicionSeleccionada.classList.remove('seleccionado');
      definicionSeleccionada = null;
    }
  });
});

definiciones.forEach((definicion) => {
  definicion.addEventListener('click', () => {
    if (actividadTerminada || definicion.classList.contains('bloqueado')) {
      return;
    }

    if (terminoSeleccionado) {
      definicionSeleccionada = definicion;
      definicionSeleccionada.classList.add('seleccionado');

      if (verificarCorrespondencia(terminoSeleccionado.getAttribute('data-definicion'), definicionSeleccionada.getAttribute('id'))) {
        terminosCorrectos++;
        terminoSeleccionado.classList.add('bloqueado');
        definicionSeleccionada.classList.add('bloqueado');
        terminoSeleccionado = null;
        definicionSeleccionada = null;

        if (terminosCorrectos === terminos.length) {
          actividadTerminada = true;
          mostrarMensajeActividadCompletada();
        } else {
          mostrarIconoCorrecto(definicionSeleccionada);
        }
      } else {
        terminoSeleccionado.classList.remove('seleccionado');
        definicionSeleccionada.classList.remove('seleccionado');
        terminoSeleccionado = null;
        definicionSeleccionada = null;
        alert('Respuesta incorrecta. Inténtalo de nuevo.');
      }
    }
  });
});

function verificarCorrespondencia(termino, definicion) {
  return termino === definicion;
}

function mostrarIconoCorrecto(definicion) {
  const icono = document.createElement('span');
  icono.classList.add('icono-correcto');
  definicion.appendChild(icono);
}

function mostrarMensajeActividadCompletada() {
  const mensaje = document.createElement('p');
  mensaje.textContent = 'Actividad completada';
  const actividad = document.querySelector('.actividad');
  actividad.appendChild(mensaje);
}

function mostrarAlerta(mensaje) {
  const alerta = document.createElement('div');
  alerta.classList.add('alerta');
  alerta.textContent = mensaje;
  const actividad = document.querySelector('.actividad');
  actividad.insertBefore(alerta, actividad.firstChild);
  setTimeout(() => {
    alerta.remove();
  }, 3000);
}

// SOPA DE LETRAS

// Palabras a encontrar
const words = ['Deductivo', 'Analítico', 'Abstracción', 'Detección'];

// Sopa de letras
const puzzle = [
    ['D', 'E', 'T', 'E', 'C', 'C', 'I', 'O', 'N', 'Z', 'X', 'C', 'P', 'Z', 'N', 'A'],
    ['E', 'E', 'Y', 'M', 'V', 'R', 'P', 'A', 'Q', 'Q', 'B', 'W', 'Z', 'X', 'W', 'E'],
    ['R', 'X', 'D', 'A', 'A', 'E', 'O', 'C', 'W', 'A', 'I', 'Q', 'C', 'S', 'I', 'N'],
    ['T', 'C', 'H', 'U', 'L', 'R', 'R', 'Y', 'E', 'S', 'R', 'E', 'X', 'D', 'N', 'Y'],
    ['R', 'V', 'J', 'A', 'C', 'M', 'C', 'C', 'R', 'Z', 'D', 'C', 'R', 'E', 'X', 'A'],
    ['A', 'Q', 'L', 'B', 'A', 'T', 'Y', 'A', 'T', 'X', 'H', 'T', 'E', 'Q', 'N', 'N'],
    ['S', 'W', 'S', 'S', 'I', 'T', 'I', 'W', 'Y', 'C', 'U', 'R', 'Q', 'E', 'I', 'N'],
    ['Z', 'E', 'Z', 'T', 'A', 'D', 'N', 'V', 'U', 'V', 'T', 'S', 'Q', 'Y', 'N', 'Y'],
    ['X', 'Y', 'K', 'R', 'S', 'E', 'M', 'R', 'O', 'F', 'A', 'E', 'X', 'T', 'N', 'N'],
    ['C', 'U', 'I', 'A', 'N', 'A', 'L', 'I', 'T', 'I', 'C', 'O', 'Z', 'R', 'X', 'A'],
    ['V', 'A', 'E', 'C', 'I', 'C', 'H', 'I', 'P', 'G', 'O', 'D', 'S', 'L', 'N', 'N'],
    ['B', 'S', 'U', 'C', 'C', 'L', 'O', 'L', 'A', 'V', 'U', 'F', 'A', 'D', 'N', 'N'],
    ['B', 'Z', 'S', 'I', 'L', 'V', 'G', 'O', 'S', 'H', 'R', 'A', 'W', 'N', 'I', 'Y'],
    ['V', 'X', 'A', 'O', 'A', 'T', 'K', 'C', 'D', 'J', 'E', 'S', 'I', 'A', 'X', 'N'],
    ['A', 'C', 'S', 'N', 'V', 'E', 'I', 'I', 'F', 'Y', 'R', 'A', 'A', 'N', 'A', 'A'],
    ['B', 'C', 'R', 'Y', 'M', 'W', 'W', 'Q', 'G', 'R', 'T', 'Z', 'N', 'A', 'X', 'S'],
    ['A', 'N', 'Q', 'R', 'R', 'Q', 'A', 'A', 'H', 'T', 'T', 'C', 'I', 'N', 'I', 'A'],
    ['N', 'L', 'R', 'E', 'C', 'A', 'R', 'Q', 'J', 'I', 'Q', 'X', 'A', 'I', 'N', 'N'],
    ['C', 'Z', 'A', 'Q', 'L', 'Z', 'T', 'R', 'K', 'U', 'W', 'C', 'X', 'N', 'N', 'X'],
    ['A', 'E', 'N', 'K', 'A', 'X', 'S', 'T', 'L', 'H', 'E', 'B', 'N', 'Y', 'X', 'I'],
    ['W', 'Z', 'Q', 'J', 'F', 'C', 'L', 'Y', 'Ñ', 'J', 'T', 'V', 'Y', 'N', 'I', 'N'],
    ['E', 'G', 'A', 'K', 'E', 'V', 'E', 'U', 'Z', 'P', 'Y', 'N', 'N', 'Y', 'N', 'O'],
    ['P', 'G', 'G', 'Y', 'R', 'U', 'G', 'I', 'X', 'E', 'X', 'M', 'A', 'A', 'Y', 'Y'],
];

// Generar la sopa de letras en el HTML
function generatePuzzle() {
    const puzzleDiv = document.getElementById('puzzle');
    const table = document.createElement('table');

    for (let i = 0; i < puzzle.length; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < puzzle[i].length; j++) {
            const cell = document.createElement('td');
            cell.textContent = puzzle[i][j];
            cell.addEventListener('click', () => selectCell(cell));
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    puzzleDiv.appendChild(table);
}

// Encontrar las palabras en la sopa de letras
function findWords() {
    const puzzleDiv = document.getElementById('puzzle');
    const table = puzzleDiv.getElementsByTagName('table')[0];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const cells = table.getElementsByTagName('td');

        for (let j = 0; j < cells.length; j++) {
            const cell = cells[j];
            if (cell.textContent === word[0]) {
                const found = checkWord(cell, word);
                if (found) break;
            }
        }
    }
}

// Verificar si una palabra se encuentra en una dirección determinada
function checkWord(cell, word) {
    const directions = [
        [0, 1],   // Derecha
        [1, 0],   // Abajo
        [1, 1],   // Diagonal hacia abajo-derecha
        [-1, 1]  // Diagonal hacia arriba-derecha
    ];

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        const row = cell.parentNode.rowIndex;
        const col = cell.cellIndex;
        let found = true;

        if (row + (direction[0] * word.length) < 0 || row + (direction[0] * word.length) >= puzzle.length) {
            continue;
        }

        if (col + (direction[1] * word.length) < 0 || col + (direction[1] * word.length) >= puzzle[row].length) {
            continue;
        }

        for (let j = 1; j < word.length; j++) {
            const newRow = row + (direction[0] * j);
            const newCol = col + (direction[1] * j);
            const cell = table.rows[newRow].cells[newCol];

            if (cell.textContent !== word[j]) {
                found = false;
                break;
            }
        }

        if (found) {
            markWord(cell, word.length, direction);
            return true;
        }
    }

    return false;
}

// Marcar la palabra encontrada en la sopa de letras
function markWord(cell, length, direction) {
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;

    for (let i = 0; i < length; i++) {
        cell.style.backgroundColor = 'yellow';
        cell = table.rows[row + (direction[0] * i)].cells[col + (direction[1] * i)];
    }

    const wordSpan = document.createElement('span');
    wordSpan.className = 'word';
    wordSpan.textContent = cell.innerHTML;
    puzzleDiv.appendChild(wordSpan);
}

// Seleccionar una celda
function selectCell(cell) {
    const selectedCells = document.getElementsByClassName('selected');
    if (selectedCells.length > 0) {
        // Desmarcar la celda previamente seleccionada
        selectedCells[0].classList.remove('selected');
    }

    // Marcar la nueva celda seleccionada
    cell.classList.add('selected');

    const selectedWord = getSelectedWord();
    if (selectedWord) {
        const found = checkWord(selectedWord.startCell, selectedWord.word);
        if (found) {
            const selectedCells = document.getElementsByClassName('selected');
            while (selectedCells.length > 0) {
                selectedCells[0].classList.remove('selected');
            }
        }
    }
}

// Obtener la palabra seleccionada hasta la celda actual
function getSelectedWord() {
    const selectedCells = document.getElementsByClassName('selected');
    if (selectedCells.length > 0) {
        const startCell = selectedCells[0];
        let word = '';
        let currentCell = startCell;
        while (currentCell) {
            word += currentCell.textContent;
            if (currentCell.classList.contains('selected')) {
                currentCell = getNextCell(currentCell);
            } else {
                break;
            }
        }
        return {
            startCell: startCell,
            word: word
        };
    }
    return null;
}

// Obtener la siguiente celda adyacente a la actual
function getNextCell(cell) {
    const row = cell.parentNode.rowIndex;
    const col = cell.cellIndex;

    const directions = [
        [0, 1],   // Derecha
        [1, 0],   // Abajo
        [1, 1],   // Diagonal hacia abajo-derecha
        [-1, 1]  // Diagonal hacia arriba-derecha
    ];

    const selectedDirection = getSelectedDirection();

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        if (
            direction[0] === selectedDirection[0] &&
            direction[1] === selectedDirection[1]
        ) {
            const newRow = row + direction[0];
            const newCol = col + direction[1];
            if (
                newRow >= 0 &&
                newRow < puzzle.length &&
                newCol >= 0 &&
                newCol < puzzle[newRow].length
            ) {
                return table.rows[newRow].cells[newCol];
            }
        }
    }

    return null;
}

// Obtener la dirección seleccionada en base a las celdas seleccionadas
function getSelectedDirection() {
    const selectedCells = document.getElementsByClassName('selected');
    if (selectedCells.length > 1) {
        const currentCell = selectedCells[selectedCells.length - 1];
        const previousCell = selectedCells[selectedCells.length - 2];

        const rowDiff = currentCell.parentNode.rowIndex - previousCell.parentNode.rowIndex;
        const colDiff = currentCell.cellIndex - previousCell.cellIndex;

        return [rowDiff, colDiff];
    }

    return [0, 0];
}

// Generar la sopa de letras y encontrar las palabras
generatePuzzle();
findWords();
setTimeout(findWords, 1000);

// Completar campos

function validarCampos() {
  var input1 = document.getElementById("input1");
  var input2 = document.getElementById("input2");
  var input3 = document.getElementById("input3");
  var input4 = document.getElementById("input4");
  var input5 = document.getElementById("input5");
  var input6 = document.getElementById("input6");
  
  if (input1.value && input2.value && input3.value && input4.value && input5.value && input6.value) {
    var mensajeCorrecto = document.getElementById("mensaje-correcto");
    mensajeCorrecto.style.display = "block";
  }
}

