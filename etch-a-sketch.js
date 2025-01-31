function createGrid(size) {
    const container = document.querySelector('.container');
    // Create a grid of size x size, use for loop to create each square
    amountofSquares = (960*960)/(size*size);
    for (let i = 0; i < amountofSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        container.appendChild(square);
    }
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
}
createGrid(16);
changeGridButton = document.querySelector('#changeGrid');
changeGridButton.addEventListener('click', () => {
    clearGrid();
    let newSize = prompt('Enter a new grid size');
    createGrid(newSize);
});
