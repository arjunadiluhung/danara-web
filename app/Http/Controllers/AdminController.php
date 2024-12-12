<?php

namespace App\Http\Controllers;

use App\Models\MasterGambar;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    //Uploaf Gambar
    public function upload_gambar(Request $request)
    {

        $request->validate([
            'foto' => [
                'required',
                'image',
                'mimes:jpeg,png,jpg,gif', // Tambahkan ekstensi file gambar yang diizinkan
            ],
        ]);

        $image = $request->file('foto');

        $fileName = $image->getClientOriginalName();

        $data = MasterGambar::where('id', 1)->first();
        $foto_lama = $data['foto'];
        unlink(public_path('media/Gambar/' . $foto_lama));

        $image->move(public_path('media/Gambar'), $fileName);
        MasterGambar::where('id', 1)->update([
            'foto' => $fileName,
        ]);

        return redirect()->back()->with('success', 'Foto Berhasil diganti');
    }

    public function upload_gambar_logo(Request $request)
    {

        $request->validate([
            'foto' => [
                'required',
                'image',
                'mimes:jpeg,png,jpg,gif', // Tambahkan ekstensi file gambar yang diizinkan
            ],
        ]);

        $image = $request->file('foto');

        $fileName = $image->getClientOriginalName();

        $data = MasterGambar::where('id', 4)->first();
        $foto_lama = $data['foto'];
        unlink(public_path('media/Logo PT Atas/' . $foto_lama));

        $image->move(public_path('media/Logo PT Atas'), $fileName);
        MasterGambar::where('id', 4)->update([
            'foto' => $fileName,
        ]);

        return redirect()->back()->with('success', 'Foto Berhasil diganti');
    }

    public function upload_gambar_xbanner1(Request $request)
    {

        $request->validate([
            'foto' => [
                'required',
                'image',
                'mimes:jpeg,png,jpg,gif', // Tambahkan ekstensi file gambar yang diizinkan
            ],
        ]);

        $image = $request->file('foto');

        $fileName = $image->getClientOriginalName();

        $data = MasterGambar::where('id', 2)->first();
        $foto_lama = $data['foto'];
        unlink(public_path('media/fotobanner/' . $foto_lama));

        $image->move(public_path('media/fotobanner'), $fileName);
        MasterGambar::where('id', 2)->update([
            'foto' => $fileName,
        ]);

        return redirect()->back()->with('success', 'Foto Berhasil diganti');
    }
    public function upload_gambar_xbanner2(Request $request)
    {

        $request->validate([
            'foto' => [
                'required',
                'image',
                'mimes:jpeg,png,jpg,gif', // Tambahkan ekstensi file gambar yang diizinkan
            ],
        ]);

        $image = $request->file('foto');

        $fileName = $image->getClientOriginalName();

        $data = MasterGambar::where('id', 3)->first();
        $foto_lama = $data['foto'];
        unlink(public_path('media/fotobanner/' . $foto_lama));

        $image->move(public_path('media/fotobanner'), $fileName);
        MasterGambar::where('id', 3)->update([
            'foto' => $fileName,
        ]);

        return redirect()->back()->with('success', 'Foto Berhasil diganti');
    }

    public function tambah_user(Request $request)
    {
        User::create($request->all());

        return redirect()->route('user-role')->with('success', 'User Berhasil ditambahkan');
    }

    public function edit_user(Request $request)
    {

        User::where('id', $request->id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => $request->role,
        ]);

        return redirect()->route('user-role')->with('success', 'User Berhasil diupdate');

    }

    public function hapus_user($id)
    {

        User::where('id', $id)->delete();
        return redirect()->route('user-role')->with('success', 'User Berhasil dihapus');

    }


}
