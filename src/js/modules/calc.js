const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;
    
    function calcFunct() {
        
        sum = Math.round( (+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value) );
        

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value.toUpperCase() === "IWANTPOPART") {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        };

    }   

    sizeBlock.addEventListener('change', calcFunct);
    materialBlock.addEventListener('change', calcFunct);
    optionsBlock.addEventListener('change', calcFunct);
    promocodeBlock.addEventListener('input', calcFunct);



};
export default calc;