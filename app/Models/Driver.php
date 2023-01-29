<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name', 
        'middle_name', 
        'last_name', 
        'driver_license', 
        'person_number',
        'is_mechanic'
    ];

    public function cars() {
        return $this->belongsToMany(Car::class);
    }    
}
