<script setup lang="ts">
export type BreadcrumbProps = {
  breadcrumb: { label: string; link?: string }[];
};
const props = defineProps<BreadcrumbProps>();
const breadcrumbList = [{ label: "ホーム", link: "/" }, ...props.breadcrumb];
</script>

<template>
  <nav>
    <ul class="breadcrumb__list">
      <li
        v-for="(item, index) in breadcrumbList"
        :key="index"
        class="breadcrumb__item"
      >
        <template v-if="item.link">
          <NuxtLink :href="item.link" class="breadcrumb__link">{{
            item.label
          }}</NuxtLink>
        </template>
        <template v-else>
          <BaseText color="secondary" size="small" tag="span">{{
            item.label
          }}</BaseText>
        </template>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.breadcrumb__list {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
}
.breadcrumb__item {
  margin-right: 0.5rem;
  &::after {
    content: "/";
    margin-left: 0.5rem;
  }
  &:last-child::after {
    content: "";
  }
}
</style>
