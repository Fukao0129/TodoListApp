<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Services\UserService;


class UserController extends Controller
{

    // 依存性注入
    public function __construct(private UserService $userService) {}

    function me(Request $request)
    {
        return response()->json($request->user(), 200);
    }

    /** ユーザー情報更新 
     * @param UserRequest $request
     * @param int $user_id
     * @return \Illuminate\Http\JsonResponse
     */
    function update(UserRequest $request, $user_id)
    {
        $validated = $request->validated();
        list($result, $status) = $this->userService->update($user_id, $validated);
        return response()->json($result, $status);
    }
}
