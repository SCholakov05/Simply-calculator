import { numbersBtn } from "./elements.js";
 import { display } from "./elements.js";
 import { resultBtn } from "./elements.js";
 import { Cbtn } from "./elements.js";

display.value = '';
let chars = '';

numbersBtn.forEach(x => x.addEventListener('click', (e) => {
        e.preventDefault();
        chars += e.target.innerText;
        display.value = chars;

        if(e.target == Cbtn){
            display.value = '';
            chars = '';
        }

        if(e.target == resultBtn){
            if(chars.includes('+')){
                display.value = '';
                let suma = chars.split('+');
                suma[1] = suma[1].substring(0, suma[1].length - 1);
                display.value = Number(suma[0]) + Number(suma[1]);
            }

            if(chars.includes('-')){
                display.value = '';
                let suma = chars.split('-');
                suma[1] = suma[1].substring(0, suma[1].length - 1);
                display.value = Number(suma[0]) - Number(suma[1]);
            }

            if(chars.includes('*')){
                display.value = '';
                let suma = chars.split('*');
                suma[1] = suma[1].substring(0, suma[1].length - 1);
                display.value = Number(suma[0]) * Number(suma[1]);
            }

            if(chars.includes('/')){
                display.value = '';
                let suma = chars.split('/');
                suma[1] = suma[1].substring(0, suma[1].length - 1);
                display.value = Number(suma[0]) / Number(suma[1]);
            }
        }
    }))



