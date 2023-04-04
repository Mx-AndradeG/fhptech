<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreUserRequest;
use App\Models\User;

class UserController extends Controller
{
    public function store(StoreUserRequest $request){
        $user = new User();
        $user->fill($request->all());
        $user->save();
        return $user;
    }
}
