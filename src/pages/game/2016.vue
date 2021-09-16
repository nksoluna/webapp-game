<template>

    <p> {{products[index].name}}</p>
    <p> {{products[index].date}}</p>
    <p>price: {{products[index].price}}$ </p>
    <p>{{products[index].description}}</p>
    
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn @click="previous" fab icon="arrow_back_ios" color="accent" />
            <q-btn @click="next" fab icon="arrow_forward_ios" color="accent" />
    </q-page-sticky>
        

    
</template>
<script>
export default{
    
    data() {
        return {
            index:0,
            url:"~assets/quasar-logo-vertical.svg",
             products: [
      {
        name: "Rule of Survival",
        price: 50,
        description: "This is survival game, developed and published by NetEase Games",
        date: "November 2017"
      },
      {
        name: "PUBG",
        price: 400,
        description: "PUBG is an online multiplayer battle royale game developed and published by PUBG Corporation.",
        date: "August 2018"
      },
      {
        name: "CSGO",
        price: 300,
        description: "CSGO is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series.",
        date: "August 2012"
      },
      {
        name: "Valorant",
        price: 0,
        description: "Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows.",
        date: "June 2020"
      },
      {
        name: "Dota 2",
        price: 0,
        description: "Dota 2 is a free-to-play multiplayer online battle arena (MOBA) video game developed and published by Valve.",
        date: "July 2013"
      },
      {
        name: "The Last of Us Part II",
        price: 600,
        description: "The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4.",
        date: "May 2020"
      }
    ]
    
        }
    },methods: {
        previous:function(){
            if(this.index>=1) this.index -= 1;
        },
        next:function(){
            if(this.index<this.products.length) this.index += 1;
        }
    },
    setup() {
    },
}
</script>

<style scoped>
    p{
        font-size: 30px;
    }
</style>