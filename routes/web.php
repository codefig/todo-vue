<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/add', 'TodoControllers@addTask')->name('todo.add');


Route::get('/getall', 'TodoControllers@getAllTasks')->name('todo.getall');

Route::get('/fetch/{id}', 'TodoControllers@fetchTask')->name('todo.fetch');

Route::post('/update', 'TodoControllers@updateTask')->name('todo.update');