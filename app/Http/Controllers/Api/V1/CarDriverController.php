<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CarDriver;
use App\Http\Resources\CarDriverResource;
use App\Http\Requests\CarDriverStoreRequest;
use App\Http\Requests\CarUpdateStoreRequest;
use Illuminate\Http\Response;

class CarDriverController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CarDriverResource::collection(CarDriver::where('id', '>', 0)->orderBy('last_name', 'asc')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CarDriverStoreRequest $request)
    {
        $created_car_driver = CarDriver::create($request->validated());

        return new CarDriverResource($created_car_driver);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $relation = CarDriver::find($id);
        
        return new CarDriverResource($relation);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CarUpdateStoreRequest $request, CarDriver $carDriver)
    {
        $carDriver->update($request->validated());

        return new CarDriverResource($carDriver);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        CarDriver::find($id)->delete();
        // $carDriver->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
