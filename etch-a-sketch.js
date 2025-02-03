function createGrid(size) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Clear existing grid
    // Create a grid of size x size, use for loop to create each square
    squareSize = (960)/(size);
    for (let i = 1; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        let interactionCount = 0;
        let baseColor = '';

        // Add hover effect with progressive darkening and random color
        square.addEventListener('mouseenter', () => {
        // Generate random color on first interaction
            if (interactionCount === 0) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                baseColor = `rgb(${r}, ${g}, ${b})`;
            }

            // Calculate darkening opacity
            interactionCount++;
            const opacity = Math.min(interactionCount / 10, 1);
            square.style.backgroundColor = baseColor;
            square.style.opacity = opacity;
        });
        container.appendChild(square);
    }
}


createGrid(16);
changeGridButton = document.querySelector('#changeGrid');
changeGridButton.addEventListener('click', () => {
    let newSize = prompt('Enter a new grid size');
    newSize = parseInt(newSize);
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Please enter a number between 1 and 100');
    }
});
