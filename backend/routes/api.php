<?php

use App\Http\Controllers\Auth\authController;
use Illuminate\Support\Facades\Route;


Route::post('/register', [authController::class, 'register']);
Route::post('/login', [authController::class, 'login']);
Route::get('/user', [authController::class,'getAllusers']);