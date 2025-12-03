<script setup lang="ts">
import type {
  Status,
  CreateStatusRequest,
  UpdateStatusRequest,
} from "@/types/status";

const PAGE_TITLE = "ステータス設定";
useHead({ title: PAGE_TITLE });

const { showSnackbar } = useSnackbar();
const { useCustomFetch, callApi } = useApi();
const { setErrorMessages } = useValidationErrors();

const isShowAddStatusModal = ref(false); // ステータス追加モーダル表示フラグ

/** ステータス一覧取得 */
const {
  data: statusData,
  status,
  refresh,
} = useCustomFetch<Status[]>(`/statuses`);

/** ステータス追加 */
const onAddStatus = (formData: CreateStatusRequest) => {
  callApi(`/statuses`, {
    method: "POST",
    body: formData,
  })
    .then(() => {
      isShowAddStatusModal.value = false;
      showSnackbar("ステータスを追加しました");
      refresh();
    })
    .catch((error) => {
      setErrorMessages(error.data.errorMessage, "add-status");
    });
};

/** ステータス更新 */
const onUpdateStatus = (statusId: number, formData: UpdateStatusRequest) => {
  callApi(`/statuses/${statusId}`, {
    method: "PUT",
    body: formData,
  })
    .then(() => {
      showSnackbar("ステータスを更新しました");
      refresh();
    })
    .catch((error) => {
      setErrorMessages(error.data.errorMessage, "update-status");
    });
};

/** ステータス削除 */
const onDeleteStatus = (statusId: number) => {
  callApi(`/statuses/${statusId}`, {
    method: "DELETE",
  })
    .then(() => {
      showSnackbar("ステータスを削除しました");
      refresh();
    })
    .catch(() => {
      showSnackbar(ERROR_TEXT, "error");
    });
};
</script>

<template>
  <NuxtLayout>
    <BreadCrumb :breadcrumb="[{ label: PAGE_TITLE }]" />

    <h1>{{ PAGE_TITLE }}</h1>

    <BaseText color="secondary" size="small">
      <span
        v-for="status in Object.values(DEFAULT_STATUSES)"
        :key="status.value"
        >「{{ status.label }}」</span
      >
      は変更・削除できません。
    </BaseText>

    <BaseCard>
      <div class="status__wrapper">
        <BaseText
          v-if="status == 'pending'"
          size="small"
          color="secondary"
          align="center"
          >{{ LOADING_TEXT }}</BaseText
        >
        <StatusCard
          v-else
          v-for="status in statusData"
          :key="status.id"
          :status
          @onDelete="onDeleteStatus"
          @onUpdate="onUpdateStatus"
        />
      </div>
    </BaseCard>

    <AddIcon @click="isShowAddStatusModal = true" />
    <AddStatusModal
      v-model:is-show="isShowAddStatusModal"
      @submit="onAddStatus"
    />
  </NuxtLayout>
</template>

<style scoped>
.status__wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
</style>
