function remplir() {
  d = new Date();
  document.getElementById("syst").value = d;
  document.getElementById("jour").value = d.getDate();
  document.getElementById("mois").value = d.getMonth() + 1;
  document.getElementById("annee").value = d.getFullYear();
  document.getElementById("numj").value = d.getDay();

  switch (d.getDay()) {
    case 1:
      document.getElementById("auj").value = "Lundi";
      break;
    case 2:
      document.getElementById("auj").value = "Mardi";
      break;
    case 3:
      document.getElementById("auj").value = "Mercredi";
      break;
    case 4:
      document.getElementById("auj").value = "Jeudi";
      break;
    case 5:
      document.getElementById("auj").value = "Vendredi";
      break;
    case 6:
      document.getElementById("auj").value = "Samedi";
      break;
    case 7:
      document.getElementById("auj").value = "Dimanche";
      break;
  }
}
