<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // Register API (POST)
    public function register(Request $request) {
        $request->validate([
            "name" => "required",
            "email" => "required|email|unique:users",
            "password" => "required|confirmed"

        ]);
        
        User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => Hash::make($request->password)
        ]);

        return response()->json([
            "status" => true,
            "message" => "User created succesfully"
        ]);


    }

    // Login API
    public function login(Request $request) {
        $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);

        if(Auth::attempt([
            "email" => $request->email,
            "password" => $request->password
        ])) {
            $user = Auth::user();

            $token = $user->createToken("myToken")->accessToken;

            return response()->json([
                "status" => true,
                "message" => "User logged in succesfully",
                "token" => $token,
                 "user" => [
                    "name" => $user->name,
                    "email" => $user->email,
                    "photo" => $user->photo,
                    "role" => $user->role // assuming you have a 'photo' field in your users table
                ]
            ]);
        } else {
            return response()->json([
                "status" => false,
                "message" => "Invalid Login details"
            ]);
        }
    }

    public function profile() {
        $user = Auth::user();

        return response()->json([
            "status" => true,
            "message" => "Profile information",
            "data" => $user
        ]);

    }

    public function logout() {
        $user = Auth::user();

        auth()->user()->token()->revoke();

        return response()->json([
            "status" => true,
            "message" => "User Logged Out"
        ]);
    }
}
