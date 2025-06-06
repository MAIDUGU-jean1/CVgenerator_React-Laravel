<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Psy\TabCompletion\Matcher\FunctionsMatcher;

class authController extends Controller
{

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|unique:users',
            'password' => 'required|string'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response()->json([
            'user' => $user,
            'message' => 'Registration successfull'
        ]);
    }
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;
        $user->remember_token = $token;
        $user->save();

        return response()->json([
            'message' => 'User login successful',
            'user' => $user,
            'token' => $token,
        ]);
    }


    public function getAllusers(Request $request){
        $token = $request->bearerToken();

        $user = User::where('remember_token', $token)->first();
        if (!$user) {
            return response()->json([
                'message' => 'Unauthorize access'
            ]);
        }
        return response()->json([
            'message'=> 'User Found ',
            'user' => $user,
        ]);
    }


    //
}