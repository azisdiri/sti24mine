function verif1() {
  cat = document.getElementById("cat").selectedIndex;
  des = document.getElementById("des").value;
  s = document.getElementById("s").checked;
  m = document.getElementById("m").checked;
  l = document.getElementById("l").checked;
  xl = document.getElementById("xl").checked;
  prix = document.getElementById("prix_loc").value;
  n = des.length;

  if (cat == 0) {
    alert("Sélection obligatoire d’une catégorie.");
    return false;
  } else if (!(n >= 10 && n <= 100)) {
    alert("longeur description entre 10 et 100 caracteres");
    return false;
  } else if (!(s || m || l || xl)) {
    alert("Selection obligatoire d'une taille");
    return false;
  } else if (!(prix >= 100 && prix <= 2000)) {
    alert("Un nombre entre 100 et 2000");
    return false;
  }
}

function verif2() {
  code = document.getElementById("habit").value;
  cin = document.getElementById("cin").value;
  duree = document.getElementById("duree").value;

  if (parseInt(code) < 1) {
    alert("Code habit >= 1");
    return false;
  }
}
