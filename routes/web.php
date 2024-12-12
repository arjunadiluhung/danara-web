<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HalamanController;
use App\Http\Controllers\SessionController;
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

Route::get('/', [HalamanController::class, 'index'])->name('index');


Route::get('/home', function () {
    return redirect('/dashboard');
});

Route::middleware(['guest'])->group(function () {
    Route::get('/login', [HalamanController::class, 'login'])->name('login');
    Route::post('/postlogin', [SessionController::class, 'login'])->name('postlogin');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [HalamanController::class, 'dashboard'])->name('dashboard');
    Route::get('/master-gambar', [HalamanController::class, 'master_gambar'])->name('master-gambar');
    Route::post('/upload-master-gambar', [AdminController::class, 'upload_gambar'])->name('upload-gambar-master');
    Route::post('/upload-master-gambar-xbanner1', [AdminController::class, 'upload_gambar_xbanner1'])->name('upload-gambar-master-xbanner1');
    Route::post('/upload-master-gambar-xbanner2', [AdminController::class, 'upload_gambar_xbanner2'])->name('upload-gambar-master-xbanner2');
    Route::get('/user-role', [HalamanController::class, 'user_role'])->name('user-role');
    Route::get('/logout', [SessionController::class, 'logout'])->name('logout');
    Route::get('/tambah-user-role', [HalamanController::class, 'tambah_user_role'])->name('tambah-user-role');
    Route::post('/tambah-user', [AdminController::class, 'tambah_user'])->name('tambah-user');
    Route::get('/edit-user-role/{id}', [HalamanController::class, 'edit_user_role'])->name('edit-user-role');
    Route::post('/edit-user', [AdminController::class, 'edit_user'])->name('edit-user');
    Route::get('/hapus-user/{id}', [AdminController::class, 'hapus_user'])->name('hapus-user');
    Route::get('/master-xbanner', [HalamanController::class, 'master_xbanner'])->name('master-xbanner');
    Route::get('/master-logo', [HalamanController::class, 'master_logo'])->name('master-logo');
    Route::post('/upload-master-gambar-logo', [AdminController::class, 'upload_gambar_logo'])->name('upload-gambar-master-logo');
});


