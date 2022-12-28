// Get grid size value. Display value. Return grid size value
const setGridSize = () => {
    const userRangeSelect = document.querySelector("#sizeSlider");
    const mainDrawArea = document.querySelector("#mainDrawArea");
    const gridBlock = document.createElement("div");
    gridBlock.classList.add('grid-item');

    userRangeSelect.addEventListener("input", e => {
        const rangeValueDisplay = document.querySelector(".gridSizeDisplayValue");
        const gridSize = e.target.value;

        rangeValueDisplay.innerHTML = `${gridSize} X ${gridSize}`;

        mainDrawArea.setAttribute("grid-template-columns", "repeat(" + gridSize + ", auto)");
    
        for (i = 0; i < gridSize ** 2; i++) {
            mainDrawArea.append(gridBlock);
        }
    })
    return e.target.value;
}

// Get brush color from interface
const setBrushColor = () => {
    const userColorSelect = document.querySelector("#colorPicker");

    userColorSelect.addEventListener("input", e => {
        return e.target.value;
    })
}

setGridSize();