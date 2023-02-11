<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SettingUpdateRequest extends FormRequest
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
            'date_from' => 'required|max:255',
            'date_to' => 'required|max:255',
            'customer' => 'required|max:255',
            'address' => 'required|max:255',
            'dispetcher' => 'required|max:255',
            'mechanic' => 'required|max:255',
        ];
    }
}
