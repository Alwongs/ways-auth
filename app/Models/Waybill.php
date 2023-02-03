<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Waybill extends Model
{
    use HasFactory;

    protected $fillable = ['number', 'date', 'full_name', 'person_number', 'car_number' ];    
}
