<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MasterGambar extends Model
{
    use HasFactory;

    // Di dalam model MasterGambar
    protected $table = 'master_gambar';
    protected $fillable = ['foto'];

}
