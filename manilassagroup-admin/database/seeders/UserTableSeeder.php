<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;


class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
                DB::table('users')->insert([
            // Admin 

            [
                'name' => 'Lestah',
                'username' => 'lestah-admin',
                'email' => 'lestah-admin@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'admin',
                'status' => '1',
            ],
                // Instructor 
            [
                'name' => 'Mike',
                'username' => 'mike-instructor',
                'email' => 'mike@ssagroup.com',
                'password' => Hash::make('password'),
                'role' => 'instructor',
                'status' => '1',
            ],
                // User Data 
            [
                'name' => 'Anna Kristina',
                'username' => 'ak-user',
                'email' => 'ak-user@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'user',
                'status' => '1',
            ], 

        ]);
    }
}
