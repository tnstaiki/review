<?php

use App\Http\Controllers\LikeController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/reviews', [ReviewController::class, 'index']);
Route::post('/reviews', [ReviewController::class, 'store']);
Route::delete('/reviews/{review}', [ReviewController::class, 'destroy']);

Route::get('/likes', [LikeController::class, 'index']);
Route::post('/likes', [LikeController::class, 'toggleLike']);
Route::get('/likes/status', [LikeController::class, 'checkLikeStatus']);

use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

Route::middleware(['auth:sanctum', EnsureFrontendRequestsAreStateful::class])->get('/user', function (Request $request) {
    return $request->user();
});