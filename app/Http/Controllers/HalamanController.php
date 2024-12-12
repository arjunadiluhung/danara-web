<?php

namespace App\Http\Controllers;

use App\Models\MasterGambar;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HalamanController extends Controller
{
    //halaman utama
    public function index()
    {
        $path = MasterGambar::where('id', 1)->first()->foto;
        $xbannerpath1 = MasterGambar::where('id', 2)->first()->foto;
        $xbannerpath2 = MasterGambar::where('id', 3)->first()->foto;
        $logo = MasterGambar::where('id', 4)->first()->foto;

        $isOnline = User::where('id', 2)->first()->isOnline;

        return view('index', [
            'path' => $path,
            'xbannerpath1' => $xbannerpath1,
            'xbannerpath2' => $xbannerpath2,
            'isOnline' => $isOnline,
            'logo' => $logo,
        ]);
    }

    public function login()
    {
        return view('login');
    }

    public function master_gambar()
    {
        $data = MasterGambar::first();
        $foto_name = $data['foto'];
        return view('master-gambar', compact('foto_name'));
    }

    public function dashboard()
    {


        $dataUser = User::all();
        return view('dashboard', [
            'dataUser' => $dataUser,
        ]);
    }

    public function user_role()
    {
        $dataUser = User::all();
        return view('user', [
            'dataUser' => $dataUser,
        ]);
    }

    public function tambah_user_role()
    {
        return view('tambahuser');
    }
    public function edit_user_role($id)
    {

        $dataUser = User::where('id', $id)->first();
        // dd($dataUser->name);
        return view('edituser', compact('dataUser'));
    }

    public function master_xbanner()
    {

        $data1 = MasterGambar::where('id', 2)->first();
        $data2 = MasterGambar::where('id', 3)->first();
        $foto_name1 = $data1['foto'];
        $foto_name2 = $data2['foto'];

        return view('master-xbanner', [
            'foto_name_1' => $foto_name1,
            'foto_name_2' => $foto_name2,
        ]);
    }

    public function master_logo()
    {
        $data1 = MasterGambar::where('id', 4)->first();
        $foto_name = $data1['foto'];
        return view('master-logo', compact('foto_name'));
    }

}
