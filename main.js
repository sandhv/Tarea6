const parrafo = document.querySelector('p');
const words = parrafo.innerText.split(' ');
parrafo.innerHTML = null

console.log(words);

words.forEach((word, index) => {
    const span = document.createElement('span');
    span.innerText = word + " ";
    span.style = "--i:"+index;
    parrafo.appendChild(span);
});

