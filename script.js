let grid = document.getElementById('grid');
let br = document.createElement('br');

// Add divs to the grid
for (let i = 0; i <= 15; i++) {
    for (let j = 0; j <= 15; j++) {
        let gridBoxes = document.createElement('div');
        gridBoxes.classList.add("boxes");
        grid.appendChild(gridBoxes);
    }
}

// Sketching functionality
let boxes = document.querySelectorAll(".boxes");
Array.from(boxes).forEach((box) => {
    box.addEventListener('mouseenter', (e) => {
        e.target.style.background = 'black';
        e.target.style.borderColor = 'white';
    })
});

// Reset button
let reset = document.getElementById('reset');

reset.addEventListener('click', clearSketch);

function clearSketch() {
    Array.from(boxes).forEach((box) => {
        box.style.background = 'white';
        box.style.borderColor = 'black';
    })
}
