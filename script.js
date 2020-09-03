
function populateGrid(gridSize) {
    let content = document.querySelector('#content');
    removeAllChildren(content);
    content.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;

    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            let cell = document.createElement('div');
            cell.addEventListener('mouseover', colorCell);
            content.appendChild(cell);
        }
    }
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function colorCell(e) {
    this.classList.toggle('colored');
}

const gridSize = document.querySelector('#gridSize');
const reset = document.querySelector('#reset');

reset.addEventListener('click', (e) => {populateGrid(gridSize.value)});
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        populateGrid(gridSize.value);
    }
})

populateGrid(gridSize.value);
