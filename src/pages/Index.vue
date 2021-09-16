<template>
  <q-page class="flex flex-center">
    <div id="title-container">
      <span id="title1">Best Game in</span>
      <span id="title2"> 2015 - 2020</span>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>
<style>
  body{
    background-image: url("https://i.pinimg.com/originals/23/1d/e8/231de8b51be796d5d921fb3ed551b596.jpg");
    background-repeat: no-repeat;
    background-size:cover;
  }
  #title-container{
   text-align: center;
  }
  #title1{
    color:black;
    font-size: 100px;
    font-weight: bold;
  }
  #title2{
    color:white;
    font-size: 100px;
    font-weight: bold;
  }
</style>