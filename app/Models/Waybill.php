<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Waybill extends Model
{
    use HasFactory;

    protected $fillable = ['number', 'date_from', 'date_to', 'full_name', 'person_number', 'car_number' ];    
}
