// 404.js

function generate404s() {
    const grid = document.getElementById('background-grid');

    const width = window.innerWidth;
    const height = window.innerHeight;

    const cellSize = 50;
    const gap = 10;

    const numCols = Math.floor(width / (cellSize + gap));

    const numRows = Math.floor(height / (cellSize + gap));

    const totalCells = numCols * numRows;

    grid.innerHTML = '';

    for (let i = 0; i < totalCells; i++) {
        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.textContent = '404';
        grid.appendChild(errorElement);
    }
}

generate404s();

window.addEventListener('resize', generate404s);