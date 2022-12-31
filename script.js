// Get grid size value. Display value. Return grid size value
const setGridSize = () => {
    const userRangeSelect = document.querySelector("#sizeSlider");

    userRangeSelect.addEventListener("input", e => {
        const rangeValueDisplay = document.querySelector(".gridSizeDisplayValue");
        const gridSize = e.target.value;
        clearGrid();
        rangeValueDisplay.innerHTML = `${gridSize} X ${gridSize}`;
        createGrid(gridSize);
    });
}

// Get brush color from interface
const setBrushColor = () => {
    const userColorSelect = document.querySelector("#colorPicker");

    userColorSelect.addEventListener("input", e => {
        return e.target.value;
    })
}

const createGrid = (userValue) => {
    const mainDrawArea = document.querySelector("#mainDrawArea");
    const gridBlock = document.createElement("div");

    mainDrawArea.style.gridTemplateColumns = `repeat(${userValue}, 1fr)`;
    gridBlock.classList.add('grid-item');
    // Generate the divs for the draw area
    for (i = 0; i < userValue ** 2; i++) {
        mainDrawArea.append(gridBlock);
    }
}

const clearGrid = () => {
    const gridDiv = document.getElementsByClassName("grid-item");
    while(gridDiv.length > 0) {
        gridDiv[0].parentNode.removeChild(gridDiv[0]);
    }
}

setGridSize();