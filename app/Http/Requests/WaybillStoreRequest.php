<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WaybillStoreRequest extends FormRequest
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
            'number' => 'required|max:255',
            'date_from' => 'required|max:255',
            'date_to' => 'required|max:255',
            'full_name' => 'required|max:255',
            'person_number' => 'required|max:255',
            'car_number' => 'required|max:255',
        ];
    }
}
