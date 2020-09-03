
function populateGrid(gridSize) {
    let content = document.querySelector('#content');
    content.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;

    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            content.appendChild(cell);
        }
    }
}

populateGrid(32);
