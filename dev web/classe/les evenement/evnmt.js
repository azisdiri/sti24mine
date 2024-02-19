function message(ch) {
  document.getElementById("etat").value = ch;
}

function transformer() {
  ch = document.getElementById("np").value;
  document.getElementById("np").value = ch.toUpperCase();
}
