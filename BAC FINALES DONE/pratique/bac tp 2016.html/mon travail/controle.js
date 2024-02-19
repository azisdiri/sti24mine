function getyr() {
  x = new Date();
  document.getElementById("annee").value = x.getFullYear();
}

function ctrl() {
  if (document.f.select1.selectedIndex == 0) {
    alert("La selection d une piece est obligatoire");
    return false;
  }
  if (document.f.select2.selectedIndex == 0) {
    alert("La selection d une sale est obligatoire");
    return false;
  }
  if (document.f.jj.value == "" || document.f.mm.value == "") {
    alert("taper un jour et un mois");
    return false;
  }

  j = parseInt(document.f.jj.value);
  m = parseInt(document.f.mm.value);
  a = parseInt(document.f.aaaa.value);

  if (j < 1 || j > 31) {
    alert("jour invalide");
    return false;
  }

  if (m < 1 || m > 12) {
    alert("mois invalide");
    return false;
  }

  // lehna 3maltha b condition wa7da w temchi 5ater l condition enno thama ochhra mafihoumch 31 nhar y3ni n7ot l ochhra li fehm 30 nhar w idha l utilisateur y7ot 31 to5rjlo erruer
  if (m == 4 || m == 6 || m == 9 || m == 11) {
    if (j == 31) {
      alert("le jour doit etre entre 1 et 30");
      return false;
    }
  }

  if (m == 2) {
    if (a % 4 != 0) {
      if (j > 28) {
        alert("jour entre 1 et 28 ");
        return false;
      }
    } else {
      if (j > 29) {
        alert("jour entre 1 et 29");
        return false;
      }
    }
  }
}
