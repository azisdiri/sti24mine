function verif1() {
  c = f.categorie.value;
  d = f.description.value;
  t = f.taille;
  p = f.prix.value;

  controle_categorie = c != 0;
  controle_description = d.length >= 10 && d.length <= 100;
  controle_taille =
    f.taille[0].checked ||
    f.taille[1].checked ||
    f.taille[2].checked ||
    f.taille[3].checked;
  controle_prix = p >= 200 && p <= 2000;

  if (!controle_categorie) {
    alert("Merci de séléctionner une catégorie");
    return false;
  }
  if (!controle_description) {
    alert("Merci de verifier la description");
    return false;
  }
  if (!controle_taille) {
    alert("Merci de séléctionner la taille");
    return false;
  }
  if (!controle_prix) {
    alert("Merci de verifier le prix");
    return false;
  }
  return true;
}

function verif2() {
  code = f.code.value;
  cin = f.cin.value;
  duree = f.duree.value;

  controle_code = code >= 1;
  controle_cin = cin.length == 8 && (cin[0] == "0" || cin[0] == "1");
  controle_duree = duree >= 1 && durre <= 4;

  if (!controle_code) {
    alert("Merci de verifier le code d'habit");
    return false;
  }
  if (!controle_cin) {
    alert("Merci de verifier le numéro de CIN");
    return false;
  }
  if (!controle_duree) {
    alert("Merci de verifier la durée");
    return false;
  }

  return true;
}
