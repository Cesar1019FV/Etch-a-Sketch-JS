document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('gridContainer');
  
    // Bucle para generar los 16x16 bloques dentro del grid
    for (let i = 0; i < 16 * 16; i++) {
      const block = document.createElement('div');
      block.classList.add('block');
      gridContainer.appendChild(block);
    }
  });