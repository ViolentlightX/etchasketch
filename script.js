//Get grid size value. Display value. Return grid size value
const setGridSize = () => {
    const userRangeSelect = document.querySelector("#sizeSlider");

    userRangeSelect.addEventListener("input", e => {
        const rangeValueDisplay = document.querySelector(".gridSizeDisplayValue");
        rangeValueDisplay.innerHTML = `${e.target.value} X ${e.target.value}`;
    })
    return e.target.value;
}

const setBrushColor = () => {
    const userColorSelect = document.querySelector("#colorPicker");

    userColorSelect.addEventListener("input", e => {
        return e.target.value;
    })
}