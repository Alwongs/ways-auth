<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarDriver extends Model
{
    use HasFactory;

    protected $table = 'car_driver';

    protected $fillable = ['code', 'car_id', 'number', 'driver_id', 'last_name' ];

}
