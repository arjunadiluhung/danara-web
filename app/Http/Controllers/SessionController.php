<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SessionController extends Controller
{
    //Login
    public function login(Request $request)
    {


        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ], [
            'email.required' => 'email tidak boleh kosong',
            'password.required' => 'password tidak boleh kosong'
        ]);

        $data = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (Auth::attempt($data)) {
            // Authentication passed
            User::where('id', Auth::user()->id)->update([
                'last_seen' => now(),
                'isOnline' => true,
            ]);


            return redirect()->intended('/dashboard'); // Redirect to a protected area after login
        } else {
            return redirect()->route('login')->with('message', 'Email dan password tidak sesuai')->withInput();
        }

    }

    public function logout()
    {

        User::where('id', Auth::user()->id)->update([
            'isOnline' => false,
        ]);

        Auth::logout();


        return redirect()->route('login');
    }
}
