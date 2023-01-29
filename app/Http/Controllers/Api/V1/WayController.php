<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Way;
use App\Http\Resources\WayResource;
use App\Http\Requests\WayStoreRequest;
use Illuminate\Http\Response;

class WayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return WayResource::collection(Way::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(WayStoreRequest $request)
    {
        $created_way = Way::create($request->validated());

        return new WayResource($created_way);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Way $way)
    {
        return new WayResource($way);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(WayStoreRequest $request, Way $way)
    {
        $way->update($request->validated());

        return new WayResource($way);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Way $way)
    {
        $way->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
