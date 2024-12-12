<?php

namespace Database\Seeders;

use App\Models\MasterGambar;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GambarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MasterGambar::create([
            'foto' => 'bumn.png',
        ]);
    }
}
