<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('drivers')->insert([
            [
                'first_name' => 'Александр',
                'middle_name' => 'Владимирович',
                'last_name' => 'Иванов',
                'driver_license' => '693569239843',
                'person_number' => '10133',
                'is_mechanic' => false,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'first_name' => 'Дмитрий',
                'middle_name' => 'Васильевич',
                'last_name' => 'Асташов',
                'driver_license' => '437598327597',
                'person_number' => '7567',
                'is_mechanic' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'first_name' => 'Дмитрий',
                'middle_name' => 'Васильевич',
                'last_name' => 'Петров',
                'driver_license' => '55937286598',
                'person_number' => '58384',
                'is_mechanic' => false,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'first_name' => 'Михаил',
                'middle_name' => 'Иванович',
                'last_name' => 'Ястребов',
                'driver_license' => '2243530333',
                'person_number' => '11234',
                'is_mechanic' => false,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'first_name' => 'Александр',
                'middle_name' => 'Иванович',
                'last_name' => 'Братышев',
                'driver_license' => '77758858844',
                'person_number' => '89934',
                'is_mechanic' => true,
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);

        \DB::table('cars')->insert([
            [
                'type' => 'Легковой',
                'fuel' => 'АИ 95',
                'model' => 'Toyota Corolla',
                'number' => 'X 275 EH 73',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'type' => 'Легковой',
                'fuel' => 'АИ 95',
                'model' => 'Toyota RAV-4',
                'number' => 'K 839 PH 82',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'type' => 'Легковой',
                'fuel' => 'АИ 95',
                'model' => 'Toyota Camry',
                'number' => 'E 241 EM 73',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'type' => 'Грузовой',
                'fuel' => 'Дизель',
                'model' => 'Pegeot 308',
                'number' => 'K 938 MA 73',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'type' => 'Грузовой',
                'fuel' => 'Дизель',
                'model' => 'Ford Transit',
                'number' => 'O 298 OM 777',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'type' => 'Грузовой',
                'fuel' => 'Дизель',
                'model' => 'Ford Transit',
                'number' => 'E 249 KE 777',
                'created_at' => now(),
                'updated_at' => now()
            ],

        ]);

        \DB::table('car_driver')->insert([
            [
                'code' => '8390',
                'car_id' => 2,
                'number' => 'K 839 PH 82',
                'driver_id' => 1,
                'last_name' => 'Иванов',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'code' => '8391',
                'car_id' => 2,
                'number' => 'K 839 PH 82',
                'driver_id' => 3,
                'last_name' => 'Петров',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'code' => '2410',
                'car_id' => 3,
                'number' => 'E 241 EM 73',
                'driver_id' => 3,
                'last_name' => 'Петров',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'code' => '2411',
                'car_id' => 3,
                'number' => 'E 241 EM 73',
                'driver_id' => 1,
                'last_name' => 'Иванов',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
