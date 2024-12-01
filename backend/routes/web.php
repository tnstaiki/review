<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';

// routes/web.php に以下を追加
Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});
