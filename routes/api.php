<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\GetController;

use App\Http\Controllers\Api\V1\CarController;
use App\Http\Controllers\Api\V1\DriverController;
use App\Http\Controllers\Api\V1\CarDriverController;
use App\Http\Controllers\Api\V1\WaybillController;
use App\Http\Controllers\Api\V1\ClearJournalController;
use App\Http\Controllers\Api\V1\SettingController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::get('/get', [GetController::class, 'index']);
    
    Route::apiResources([
        'cars' => CarController::class,
        'drivers' => DriverController::class,
        'relations' => CarDriverController::class,                
        'waybills' => WaybillController::class,  
        'settings' => SettingController::class              
    ]);

    Route::get('/clear', [ClearJournalController::class, 'index']);
});



