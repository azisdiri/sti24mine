function bienvenu() {
  document.f.a.value = new Date().getFullYear();
}

function controler() {
  if (document.f.D1.selectedIndex == 0) {
    alert(" La selection d une piece est obligatoire");
    return false;
  }
  if (document.f.D2.selectedIndex == 0) {
    alert(" La selection d une salle est obligatoire");
    return false;
  }
  if (document.f.j.value == "" || document.f.m.value == "") {
    alert("taper un jour et un mois");
    return false;
  }
  jj = parseInt(document.f.j.value);
  mm = parseInt(document.f.m.value);
  aa = parseInt(document.f.a.value);

  if (mm < 1 || mm > 12) {
    alert("moi invalide");
    return false;
  }
  if (jj < 1 || jj > 31) {
    alert("jour invalide");
    return false;
  }

  if (
    mm == 1 ||
    mm == 3 ||
    mm == 5 ||
    mm == 7 ||
    mm == 8 ||
    mm == 10 ||
    mm == 12
  ) {
    if (jj < 1 || jj > 31) {
      alert("jour entre 1..31");
    }
  }
  if (mm == 4 || mm == 6 || mm == 9 || mm == 11) {
    if (jj < 1 || jj > 30) {
      alert("jour entre 1..30");
    }
  }
  if (mm == 2) {
    if (aa % 4 == 0) {
      if (jj < 1 || jj > 29) {
        alert("jour entre 1..29");
      }
    } else {
      if (jj < 1 || jj > 28) {
        alert("le jour est entre 1..28");
      }
    }
  }
  return true;
}
