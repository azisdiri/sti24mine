<?php

$database = mysqli_connect("localhost", "root", "", "BD123456");
$c = $_POST['categorie'];
$d = $_POST['description'];
$t = $_POST['taille'];
$p = $_POST['prix'];

$request = "insert into habit(codeCat, description,taille,prix) values ($c,'$d','$t',$p);";
$response = mysqli_query($database, $request);
if ($response) {
    echo '<script>alert("Enregistrement réalisé avec succès");</script>';
    return; 
} else {
    echo '<script>alert("Erreur est servenue");</script>';
    return; 
}
?>