<script setup lang="ts">
const year = new Date().getFullYear();

const navMenu = [
  { icon: "list", label: "すべて", to: "/" },
  { icon: "calendar-day", label: "今日", to: "/today/" },
  { icon: "trash", label: "ゴミ箱", to: "/trash/" },
  { icon: "gear", label: "ステータス", to: "/status" },
];
</script>

<template>
  <aside class="sidebar">
    <nav>
      <ul class="sidebar__menu-list">
        <li v-for="menu in navMenu" :key="menu.to">
          <NuxtLink :to="menu.to">
            <BaseIcon :icon="menu.icon" />{{ menu.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <p class="copyright__text">&copy; {{ year }} F</p>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  width: 10rem;
  top: 3.5rem;
  height: calc(100vh - 3.5rem);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  .sidebar__menu-list {
    li {
      white-space: nowrap;
      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.7rem 1rem;
        transition: all 200ms 0s ease;
        &:hover {
          background: var(--hover-color);
        }
      }
    }
    .router-link-exact-active {
      background: var(--active-color);
    }
  }

  .copyright__text {
    position: absolute;
    bottom: 1rem;
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
  }
}
</style>
