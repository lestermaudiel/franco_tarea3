const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');
textBox.addEventListener(
    "keydown",
    (e) => (output.textContent = `Hiciste click en la tecla:"${e.key}".`)
);