<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color:black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Best Game Of The Year
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <div class="icon-container">
          <img class="icon-img" src="~assets/controller.png">
          <h2>Best game in each year</h2>
        </div>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Year 2015',
    caption: '',
    icon: 'keyboard_double_arrow_right',
    link: '/#/pages/game/2015'
  },
  {
    title: 'Year 2016',
    caption: '',
    icon: 'keyboard_double_arrow_right',
    link: '/#/pages/game/2016'
  },
  {
    title: 'Year 2017',
    caption: '',
    icon: 'keyboard_double_arrow_right',
    link: '/#/pages/game/2017'
  },
  {
    title: 'Year 2018',
    caption: '',
    icon: 'keyboard_double_arrow_right',
    link: '/#/pages/game/2018'
  },
  {
    title: 'Year 2019',
    caption: '',
    icon: 'keyboard_double_arrow_right',
    link: '/#/pages/game/2019'
  },
  {
    title: 'Year 2020',
    caption: '',
    icon: 'keyboard_double_arrow_right',
    link: '/#/pages/game/2020'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style>
  body{
    background-color:rgba(0, 29, 25, 0.2)
  }
  h2{
    font-size: 25px;
    font-weight: bold;
    color:dodgerblue;
  }
  .icon-container{
    text-align: center;
  }
  .icon-img{
    max-width: 150px;
  }
</style>