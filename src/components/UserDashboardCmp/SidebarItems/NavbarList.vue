<template>
  <div>
    <ul v-for="item in NavbarListItems" :key="item.name" @click="item.fun">
      <li>
        <router-link
          exact-active-class="text-teal-500  bg-teal-100"
          :to="`/HelloUser/${item.component}`"
          exact
          class="flex"
        >
          <navbar-list-item
            class="h-full w-full grow"
            :icon="item.icon"
            :name="item.name"
          ></navbar-list-item
        ></router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import NavbarListItem from './NavbarListItem.vue'
const isActive = ref(false)

const NavbarListItems = reactive([
  {
    name: 'Feed',
    icon: 'radix-icons:dashboard',
    component: ''
  },
  {
    name: 'Resources',
    icon: 'clarity:atom-solid',
    component: 'TheResources'
  },
  {
    name: 'Favorite Cards',
    icon: 'solar:star-bold',
    component: 'FavoriteCards'
  },
  {
    name: 'Collections',
    icon: 'tabler:stars',
    component: 'UsersFavorites'
  },
  {
    name: 'Articles',
    icon: 'ion:newspaper',
    component: 'ArticlesList'
  }
])
</script>

<style lang="scss" scoped>
// a.router-link-active {
//   color: aqua;
// }

// .router-link-active {
//   color: orange;
// }

// .router-link-exact-active {
//   color: crimson;
// }
</style>
