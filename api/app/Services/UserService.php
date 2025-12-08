<?php

namespace App\Services;

use App\Repositories\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;

class UserService
{
    // 依存性注入
    public function __construct(
        private UserRepository $userRepository
    ) {}

    /**
     * 更新
     *
     * @param int $user_id
     * @param array $data
     * @return array
     */
    public function update($user_id, array $data)
    {
        DB::beginTransaction();
        try {
            $res = $this->userRepository->update($user_id, $data);
            $status = Response::HTTP_OK;
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            $res = ['error' => $e->getMessage()];
            $status = Response::HTTP_INTERNAL_SERVER_ERROR;
        }
        return [$res, $status];
    }
}
