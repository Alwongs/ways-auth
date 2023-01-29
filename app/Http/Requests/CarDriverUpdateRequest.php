<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CarDriverStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'code' => 'required||unique:car_driver,code,' . $this->car_driver->id,
            'car_id' => 'required|max:255',
            'number' => 'required|max:255',
            'driver_id' => 'required|max:255',
            'last_name' => 'required|max:255',
        ];
    }
}