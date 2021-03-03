// change color on the basis of entered color

const colorInput = document.getElementById('color-input');
const inputColorBox = document.getElementById('input-color-box');

colorInput.addEventListener('keyup', () => {
    const hex = colorInput.value;
    if (!validHexOrNot(hex)) {
        return;
    }
        
    inputColorBox.style.backgroundColor = hex;
    
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

// convert Hex to RGB 

const convertHexToRGB = (hex) => {
    if (!validHexOrNot(hex)) {
        return;
    }

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }


    const r = parseInt(hex.substring(0,2) , 16);
    const g = parseInt(hex.substring(2,4) , 16);
    const b = parseInt(hex.substring(4,6) , 16);

    return {r, g, b};
}

console.log(convertHexToRGB('39CCCC')); 

// convert RGB to Hex

const convertRGBToHex = (r, g, b) => {
    const firstPair = ('0' + r.toString(16)).slice(-2);
    const secondPair = ('0' + g.toString(16)).slice(-2);
    const thirdPair = ('0' + b.toString(16)).slice(-2);

    return `#${firstPair}${secondPair}${thirdPair}`;
}

console.log(convertRGBToHex(0, 255, 255));





