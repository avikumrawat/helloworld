const text = "Hello, world!";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    console.log(text[i]);
    i++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();
