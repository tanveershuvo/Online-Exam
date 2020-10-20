<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\SubjectController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

    Route::post('logout', 'AuthController@logout');
    Route::get('/all-questions', [QuestionController::class,'fetch_all_questions']);
    Route::post('/add-ques-to-sub', [QuestionController::class,'add_ques_to_sub']);
    Route::post('/add-question-options', [QuestionController::class,'add_question_options']);
    Route::get('/all-subjects', [SubjectController::class,'fetch_all_subject']);
    Route::post('/auth/login', [AuthController::class,'login']);
    Route::post('/me', [AuthController::class,'me']);
