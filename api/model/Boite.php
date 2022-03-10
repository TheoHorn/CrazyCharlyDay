<?php
namespace CrazyCharlyDay\api\model;

use Illuminate\Database\Eloquent\Model;

class Boite extends Model {
    protected $table = "boite";
    protected $primaryKey = 'id';
    public $timestamps = false;

}