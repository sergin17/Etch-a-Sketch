function createGrid(size) {
    const container = document.querySelector('.container');
    // Create a grid of size x size, use for loop to create each square
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        container.appendChild(square);
    }
}