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
        header('Location: /admin.html');
        exit();
    }
}