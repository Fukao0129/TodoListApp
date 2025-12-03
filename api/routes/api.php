<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:sanctum']], function () {

    // ユーザー情報
    Route::get('/me', 'App\Http\Controllers\UserController@me')->name('me');

    // Todo
    Route::get('/todos', 'App\Http\Controllers\TodoController@index');
    Route::get('/todos/{todo_id}', 'App\Http\Controllers\TodoController@show');
    Route::put('/todos/trash-completed', 'App\Http\Controllers\TodoController@trashAllCompleted');
    Route::put('/todos/{todo_id}', 'App\Http\Controllers\TodoController@update');
    Route::post('/todos', 'App\Http\Controllers\TodoController@store');
    Route::delete('/todos/{todo_id}', 'App\Http\Controllers\TodoController@delete');
    Route::delete('/todos', 'App\Http\Controllers\TodoController@bulkDelete');

    // ステータス
    Route::get('/statuses', 'App\Http\Controllers\StatusController@index');
    Route::post('/statuses', 'App\Http\Controllers\StatusController@store');
    Route::put('/statuses/{status_id}', 'App\Http\Controllers\StatusController@update');
    Route::delete('/statuses/{status_id}', 'App\Http\Controllers\StatusController@delete');
});
