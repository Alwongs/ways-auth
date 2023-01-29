<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CarDriverResource extends JsonResource
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
            'car_id' => $this->car_id,
            'number' => $this->number,
            'driver_id' => $this->driver_id,
            'last_name' => $this->last_name,
            'created_at' => $this->created_at,
        ];
    }
}
