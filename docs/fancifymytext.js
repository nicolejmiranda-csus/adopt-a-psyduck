// fancifymytext.js
function makeTextBigger() {
  document.getElementById("textArea").style.fontSize = "24pt";
}

function applyStyle() {
  let textArea = document.getElementById("textArea");
  let fancy = document.getElementById("fancy");

  if (fancy.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooify() {
  let textArea = document.getElementById("textArea");
  let text = textArea.value.toUpperCase();

  let sentences = text.split(".");
  for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].trim();
    if (sentences[i].length > 0) {
      sentences[i] += "-MOO";
    }
  }
  textArea.value = sentences.join(". ");
}
