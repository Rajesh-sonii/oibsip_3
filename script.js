const result = document.querySelector('.result');
const input = document.querySelector('.input');
const select = document.querySelector('#selc');
const btn = document.querySelector('.btn');


function calc() {
    let v = input.value;

    if (select.value === 'c') {
        v = (v * 9 / 5) + 32;
    }
    else {
        v = (v - 32) * 5 / 9;
    }

    result.innerHTML = `The result is: ${v}`;

    setTimeout(() => {
        window.location.reload();
    }, 2000);

}
