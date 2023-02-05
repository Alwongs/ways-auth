<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Waybill;

class ClearJournalController extends Controller
{
    public function index()
    {
        Waybill::query()->delete();

        return response(null, Response::HTTP_NO_CONTENT);        
    }
}
