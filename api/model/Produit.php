<?php
namespace CrazyCharlyDay\api\model;

use Illuminate\Database\Eloquent\Model;

class Produit extends Model {
    protected $table = "produit";
    protected $primaryKey = 'id';
    public $timestamps = false;

}