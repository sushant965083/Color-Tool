// change color on the basis of entered color

const colorInput = document.getElementById('color-input');
const InputColorBox = document.getElementById('input-color-box');

colorInput.addEventListener('keyup', () => {
    if (!validHexOrNot(colorInput.value)) {
        return;
    }
        
    InputColorBox.style.backgroundColor = colorInput.value;
    
})

//check for valid hex color in javascript

const validHexOrNot = (hex) => {
    if (!hex) return false;

    const strippedHex = hex.replace('#', '');
    if (strippedHex.length === 3 || strippedHex.length === 6) {
        return true;
    } else {
        return false;
    }
    
}




