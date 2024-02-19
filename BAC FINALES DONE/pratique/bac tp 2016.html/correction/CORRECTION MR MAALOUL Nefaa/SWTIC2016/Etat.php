<?php
mysql_connect("localhost","root","") or die ("Erreur de connexion au serveur");
mysql_select_db("BDTIC2016") or die ("Erreur de base de donnée");
$sql="SELECT Titre, Libelle, DateSpectacle FROM Piece, Salle 
      JOIN Spectacle ON Piece.IdPiece=Spectacle.IdPiece AND 
	  Salle.IdSalle=Spectacle.IdSalle 
	  ORDER BY DateSpectacle ASC, Titre ASC;";
$res=mysql_query($sql);
if ($res == FALSE) {
       echo "La requête SELECT a échoué.";
   } else {
	$i=0;
	echo "<Table><TR><TH>N° d'ordre</TH><TH>Titre de la pièce</TH>
	      <TH>Libellé de la Salle</TH><TH>Date du spectacle</TH></TR>";
       while ($tab = mysql_fetch_array($res)) {
			$i=$i+1;
       	        echo "<TR><TD>".$i."</TD><TD>".$tab["Titre"]."</TD>
				<TD>".$tab["Libelle"]."</TD><TD>".$tab["DateSpectacle"]."</TD></TR>";
        }
		echo "</Table>";
    }
   mysql_close();
?>
