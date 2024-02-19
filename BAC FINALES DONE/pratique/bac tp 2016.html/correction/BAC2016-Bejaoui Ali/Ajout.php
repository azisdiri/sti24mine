<?php
mysql_connect("127.0.0.1","root","");
mysql_select_db("BD_BAC2016");
$salle = $_POST['D2'];
$tp = $_POST['D1'];
$jj = $_POST['j'];
$mm = $_POST['m'];
$aa = $_POST['a'];
$date = $aa.'-'.$mm.'-'.$jj;
$req1 = mysql_query("SELECT * FROM piece p,spectacle sp
WHERE p.IdPiece=sp.IdPiece AND p.IdPiece='$tp' AND sp.DateSpectacle='$date'")or die(mysql_error());

$req2 = mysql_query("SELECT * FROM salle s,spectacle sp 
WHERE s.IdSalle=sp.IdSalle AND s.IdSalle='$salle' AND sp.DateSpectacle='$date'")or die(mysql_error());
if(mysql_num_rows($req2)!=0){
	echo"<p>Salle non disponible </p>";
	die();
}
if(mysql_num_rows($req1)!=0){
	echo"<p>Piece deja programmee </p>";
	die();
}
$reqf = mysql_query("INSERT INTO spectacle VALUES ('$tp','$date','$salle')")or die(mysql_error());
if($reqf==Null){
	echo"<p>Erreur Insertion</p> ";
	die();
}
else{
	echo"<p> Insertion reussite </p>";
	die();
}
mysql_close();
?>