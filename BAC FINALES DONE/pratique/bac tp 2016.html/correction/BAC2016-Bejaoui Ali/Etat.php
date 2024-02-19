<?php
mysql_connect("127.0.0.1","root","");
mysql_select_db("BD_BAC2016");
$req = mysql_query("SELECT Titre ,Libelle ,DateSpectacle 
FROM piece p,salle s,spectacle sp WHERE p.IdPiece=sp.IdPiece AND s.IdSalle = sp.IdSalle ORDER BY DateSpectacle ASC, Titre ASC") or die(mysql_error());
echo'N d\'orde&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTitre de la piece &nbsp&nbsp&nbsp&nbsp&nbsp&nbspLibelle de la salle &nbsp&nbsp&nbsp&nbsp&nbsp&nbspDate du spectacle <br>';
$i=1;
while($res = mysql_fetch_array($req)){
echo $i."&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
.$res[0]."&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
.$res[1]."&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp".$res[2]."<br><br>";
$i++;
}die();
mysql_close();
?>