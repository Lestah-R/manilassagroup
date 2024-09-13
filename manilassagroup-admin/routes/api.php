<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\OrganisationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// <Project URL>/api/register

// Open Routes

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protected Routes
Route::group([
  "middleware" => ["auth:api"]
], function() {
  
  Route::get("profile", [AuthController::class, "profile"]);
  Route::get("logout", [AuthController::class, "logout"]);


  Route::get('user-organisations', [OrganisationController::class, 'userOrganisations']); //eto route para sa list ng organisation na pinost ng current use
  Route::apiResource('organisations', OrganisationController::class);
  Route::post('/update-image-organisation/{id}', [OrganisationController::class, 'updateImage']);
});

Route::get('public-organisations', [OrganisationController::class, 'publicOrganisations']);




