<?php

use CrazyCharlyDay\api\model\Utilisateur;

session_start();

if(isset($_POST['nom'])) {
    $passw = filter_var($_POST['password'], FILTER_SANITIZE_STRING);
    $name = filter_var($_POST['nom'], FILTER_SANITIZE_STRING);
    $user = Utilisateur::query()->get('*')->where('username','=',$name)->first();
    if(password_verify($passw, $user->password)) {
        if(isset($_SESSION['username'])) {
            session_destroy();
            session_start();
        }
        $_SESSION['prenom'] = $user.prenom;
        $_SESSION['nom'] = $user.nom;
        if($user.admin==1) {
            header('Location: https://webetu.iutnc.univ-lorraine.fr/~monza1u/CrazyCharlyDay/admin.html');
            exit();
        } else {
            header('Location: https://webetu.iutnc.univ-lorraine.fr/~monza1u/CrazyCharlyDay/index.html');
            exit();
        }

    }
}