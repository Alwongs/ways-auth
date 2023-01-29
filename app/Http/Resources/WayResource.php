<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WayResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'code' => $this->code,
            'driver_id' => $this->driver_id,
            'car_id' => $this->car_id,
            'created_at' => $this->created_at,
        ];
    }
}
