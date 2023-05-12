let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let output = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (b) => {
        if (b.target.innerHTML == '=') {
            output = eval(output);
            input.value = output;
        }
        else if (b.target.innerHTML == 'C') {
            output = "";
            input.value = output;
        }
        else if (b.target.innerHTML == 'DEL') {
            output = output.substring(0, output.length - 1);
            input.value = output;
        }
        else {
            output += b.target.innerHTML;
            input.value = output;
        }
    })
})