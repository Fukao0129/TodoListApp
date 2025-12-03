// 並び替え方向
export const SORT_DIRECTION = {
  ASC: {
    value: "asc",
  },
  DESC: {
    value: "desc",
  },
  DEFAULT: {
    value: null,
  },
};

// 並び替え選択肢
export const SORT_OPTIONS = [
  {
    label: "期日が近い順",
    sort: "due_date",
    direction: SORT_DIRECTION.ASC.value,
  },
  {
    label: "期日が遠い順",
    sort: "due_date",
    direction: SORT_DIRECTION.DESC.value,
  },
  {
    label: "優先度が高い順",
    sort: "priority",
    direction: SORT_DIRECTION.DESC.value,
  },
  {
    label: "優先度が低い順",
    sort: "priority",
    direction: SORT_DIRECTION.ASC.value,
  },
  {
    label: "新しい順",
    sort: "created_at",
    direction: SORT_DIRECTION.DESC.value,
  },
];
