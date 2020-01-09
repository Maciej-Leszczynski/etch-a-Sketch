let grid = document.getElementById('grid');
let br = document.createElement('br');


for (let i = 0; i <= 15; i++) {
    for (let j = 0; j <= 15; j++) {
        let gridBoxes = document.createElement('div');
        gridBoxes.classList.add("boxes");
        grid.appendChild(gridBoxes);
    }
}

let boxes = document.querySelectorAll(".boxes");
Array.from(boxes).forEach((box) => {
    box.addEventListener('mouseenter', (e) => {
        e.target.style.background = 'black';
    })
});
