<?php

namespace CrazyCharlyDay\api\controleur;

use CrazyCharlyDay\api\model\Utilisateur;

class Authentication
{
    public static function createUser($userid, $password) {
        // vérif injection sql
        $pass = filter_var($password, FILTER_SANITIZE_STRING);
        $name = filter_var($userid, FILTER_SANITIZE_STRING);

        // $alea = random_bytes(32); a ajouter aussi ?
        $hash = password_hash($pass, PASSWORD_DEFAULT, ['cost'=> 12]);
        Utilisateur::query()->insert(array('username'=>$name,'password'=>$hash));
    }

    public static function updatePass($userid,$password) {
        Utilisateur::query()->where('id','=',$userid)->update(array('password'=>$password));
    }
}
