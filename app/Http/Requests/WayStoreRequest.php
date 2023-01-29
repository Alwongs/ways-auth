<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WayStoreRequest extends FormRequest
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
            'code' => 'required|min:4',
            'driver_id' => 'required|max:255',
            'car_id' => 'required|max:255'
        ];
    }
}