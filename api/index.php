<?php

use CrazyCharlyDay\api\model\Boite;
use CrazyCharlyDay\api\model\Categorie;
use CrazyCharlyDay\api\model\Produit;
use CrazyCharlyDay\conf\api\Database;

require_once "./conf/Database.php";
require_once "./model/Produit.php";
require_once "./model/Boite.php";
require_once "./model/Categorie.php";

Database::connect();

header("Content-type: application/json");

$result = array();
$result["produits"] = Produit::all();
$result["boites"] = Boite::all();
$result["categories"] = Categorie::all();

echo json_encode($result);

