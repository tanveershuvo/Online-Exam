<?php

namespace Database\Seeders;

use App\Models\Subject;
use Faker\Factory;
use Illuminate\Database\Seeder;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        for($i = 0; $i < 10; $i++) {
            Subject::create([
                'subject_name' => $faker->text(10),
            ]);
        }
    }
}
