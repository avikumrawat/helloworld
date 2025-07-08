const text = "Hello, world!";
let i = 0;
let output = "";

function typeWriter() {
  if (i < text.length) {
    output += text[i];
    console.clear();
    console.log(output);
    i++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();
