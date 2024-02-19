function alph(ch) {
  i = 0;
  ch1 = ch.charAt(i).toUpperCase();
  while (i < ch.length && ch1 >= "A" && ch1 <= "Z") {
    i += 1;
  }
  return i == ch.length;
}

function numiric(ch) {
  let i = 0;
  while (i < ch.length && ch.charAt(i) >= "1" && ch.charAt(i) <= "9") {
    i += 1;
  }
  return i == ch.length;
}

function verif1() {
  ncin = document.getElementById("ncin").value;
  n = document.getElementById("n").value;
  p = document.getElementById("p").value;
  tel = document.getElementById("tel");
  if (ncin.length != 8 || numiric(ch) == false) {
    alert("ncin invalide");
    return false;
  }
}
