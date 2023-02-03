<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WaybillResource extends JsonResource
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
            'number' => $this->number,
            'date' => $this->date,
            'full_name' => $this->full_name,
            'person_number' => $this->person_number,
            'car_number' => $this->car_number,
            'created_at' => $this->created_at,
        ];
    }
}
