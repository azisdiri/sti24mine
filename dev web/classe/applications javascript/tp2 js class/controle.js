/*function alph(ch) {
  for (i = 0; i < ch.length; i++) {
    ch1 = ch.charAt(i).toUpperCase();
    if (!(ch1 >= "A" && ch1 <= "Z")) {
      return false;
    }
  }
}*/
function alph(ch) {
  i = 0;
  ch1 = ch.charAt(i).toUpperCase();
  while (i < ch.length && ch1 >= "A" && ch1 <= "Z") {
    i += 1;
  }
  return i == ch.length;
}

function verifier() {
  n = document.getElementById("n").value;
  p = document.getElementById("p").value;
  if (n == "" || alph(n) == false) {
    alert("nom invalide");
    return false;
  } else if (p == "" || alph(p) == false) {
    alert("prenom invalide");
    return false;
  } else {
    ch = n.charAt(0).toUpperCase() + n.substring(1) + "." + p + "@gmail.com";
    document.getElementById("e").value = ch;
  }
}
