<?php
$IdPiece=$_POST["IdPiece"];
$IdSalle=$_POST["IdSalle"];
$dtjj=$_POST["dtjj"];
$dtmm=$_POST["dtmm"];
$dtaa=$_POST["dtaa"];
$dt=$dtaa."-".$dtmm."-".$dtjj;
mysql_connect("localhost","root","") or die ("Erreur de connexion au serveur");
mysql_select_db("BDTIC2016") or die ("Erreur de base de donnée");
$sql="SELECT * FROM SPECTACLE WHERE DateSpectacle='$dt' AND IdSalle='$IdSalle';";
$res=mysql_query($sql);
$nb=mysql_num_rows($res);
if($nb!=0){
	echo "Salle déja occupée à cette date";
	}
$sql2="SELECT * FROM SPECTACLE WHERE DateSpectacle='$dt' AND IdPiece='$IdPiece';";
$res2=mysql_query($sql2);
$nb2=mysql_num_rows($res2);
if($nb2!=0){
	echo "Piece déja programmée";
}	
if(($nb==0) && ($nb2==0)) {
	$sql3="INSERT INTO Spectacle values ('$IdPiece','$dt','$IdSalle')";
	$q=mysql_query($sql3) or die (mysql_error());
	  if ($q == FALSE) {
       echo "Erreur d'ajout des informations .";
   } else {
       echo "Ajout effectué avec succès.";
   }
}
mysql_close();	
?>