<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/pages', function () {
    return \App\Models\Page::where('is_active', true)->get();
});

Route::get('/pages/{slug}', function ($slug) {
    return \App\Models\Page::where('slug', $slug)->where('is_active', true)->firstOrFail();
});
