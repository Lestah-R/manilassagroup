<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('admin.index');
});

// Catch-all route to serve the React application
Route::get('{any}', function () {
    return view('admin.admin_dashboard'); // eto and index view ko admin_dashboard
})->where('any', '.*');