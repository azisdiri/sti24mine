<?php

$database = mysqli_connect("localhost", "root", "", "BD123456");
$code = $_POST['code'];
$cin = $_POST['cin'];
$duree = $_POST['duree'];

$request = "select * from habit where codeHab = $code";
$response = mysqli_query($database, $request);
if (mysqli_num_rows($response) == 0) {
    echo '<script>alert("Erreur: Habit inexistant");</script>';
} else {

    $request = "select * from habit where codeHab = $code and disponible='D'";
    $response = mysqli_query($database, $request);
    if (mysqli_num_rows($response) == 0) {
        echo '<script>alert("Erreur: Habit déja louer");</script>';
    } else {

        $request = "select * from client where cin = $cin";
        $response = mysqli_query($database, $request);
        if (mysqli_num_rows($response) == 0) {
            echo '<script>alert("Erreur: Client inexistant");</script>';
        } else {

            $date = date("Y/m/d");
            $request = "insert into location values ('$date', $code, '$cin', $duree)";
            $response = mysqli_query($database, $request);
            if ($response) {

                $request = "update habit set disponible='N' where codeHab=$code";
                $response = mysqli_query($database, $request);
                if ($response) {
                    echo '<script>alert("Location effectué avec succès");</script>';
                }
            }
        }
    }

}
?>