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
        Subject::create([
            'subject_name' => 'General Knowledge',
        ]);
        Subject::create([
            'subject_name' => 'Math',
        ]);
        Subject::create([
            'subject_name' => 'Programming',
        ]);

    }
}
