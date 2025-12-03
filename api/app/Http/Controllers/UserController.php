<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    function me(Request $request)
    {
        return response()->json($request->user(), 200);
    }
}
