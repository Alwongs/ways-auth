<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DriverUpdateRequest extends FormRequest
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
            'first_name' => 'required|max:255',
            'middle_name' => 'required|max:255',
            'last_name' => 'required|max:255',

            'driver_license' => 'required|max:255|unique:drivers,driver_license,' . $this->driver->id,
            'person_number' => 'required|max:255|unique:drivers,person_number,' . $this->driver->id,

            'is_mechanic' => 'required',
        ];
    }
}
