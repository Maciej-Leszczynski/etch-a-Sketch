let grid = document.getElementById('grid');
let br = document.createElement('br');
let defaultSize = 16;
let reset = document.getElementById('reset');
let resize = document.getElementById('size');

// Add divs to the grid
function drawGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let gridBoxes = document.createElement('div');
            gridBoxes.classList.add("boxes");
            grid.appendChild(gridBoxes);
        }
    }    
}

// Clear grid
function clearGrid() {
    let boxes = document.querySelectorAll(".boxes");
    Array.from(boxes).forEach((box) => {
        grid.removeChild(box);
    })
}

// Sketching functionality
function sketch() {
    let boxes = document.querySelectorAll(".boxes");
    Array.from(boxes).forEach((box) => {
        box.addEventListener('mouseenter', (e) => {
            e.target.style.background = 'black';
            e.target.style.borderColor = 'white';
        })
    });
}

// reset button
function clearSketch() {
    let boxes = document.querySelectorAll(".boxes");
    Array.from(boxes).forEach((box) => {
        box.style.background = 'white';
        box.style.borderColor = 'black';
    })
}

// resize button
function changeSize() {
    let newSize = 0;
    while(newSize < 1 || newSize > 64) {
        newSize = prompt("Enter desired size of the grid between 1 and 64.");
    }
    let percent = 100 / Number(newSize);
    clearGrid();
    drawGrid(newSize);
    changeStyle(percent);
    sketch();
}

// change style of the .boxes class
function changeStyle(percent) {
    let boxesClass = document.querySelectorAll(".boxes");
    Array.from(boxesClass).forEach((box) => {
        box.style.width = `${percent}%`;
        box.style.height = `${percent}%`;
    });
}

// MAIN
drawGrid(defaultSize);
sketch();

reset.addEventListener('click', clearSketch);
resize.addEventListener('click', changeSize);
