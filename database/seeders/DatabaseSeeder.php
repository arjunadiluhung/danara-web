<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\MasterGambar;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@inkindo.com',
            'password' => bcrypt('123456'),
            'role' => 'admin',
            'remember_token' => Str::random(10),
            'isOnline' => false
        ]);

        // Seed marketing user
        User::create([
            'name' => 'Marketing User',
            'email' => 'marketing@inkindo.com',
            'password' => bcrypt('123456'),
            'role' => 'marketing',
            'remember_token' => Str::random(10),
            'isOnline' => false
        ]);

        MasterGambar::create([
            'foto' => 'WhatsApp Image 2022-12-22 at 17.06.59.jpg',
        ]);

        MasterGambar::create([
            'foto' => 'Twibbon MSIB 6 Narasio Data.png',
        ]);

        MasterGambar::create([
            'foto' => 'timnas.jpg',
        ]);
    }
}
