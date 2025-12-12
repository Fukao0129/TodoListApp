<?php

use Illuminate\Support\Facades\Route;

// 認証
Route::post('/api/login', 'App\Http\Controllers\LoginController@login')->name('login');
Route::post('/api/logout', 'App\Http\Controllers\LoginController@logout');

Route::get('/', function () {
    return view('welcome');
});