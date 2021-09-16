<template>

    <p> {{products[index].name}}</p>
    <img src="~assets/2016-game/1.jpg" id="game-img">
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
             products: [
      {
        name: "Rule of Survival",
        price: 50,
        image:"https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4VZ4C5y9f8QC0Wa77NJlPB6O2Fniz7zz4ErXEG8Bc9ycEzdubUo.jpg",
        description: "This is survival game, developed and published by NetEase Games",
        date: "November 2017"
      },
      {
        name: "PUBG",
        price: 400,
        image:"https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg",
        description: "PUBG is an online multiplayer battle royale game developed and published by PUBG Corporation.",
        date: "August 2018"
      },
      {
        name: "CSGO",
        price: 300,
        image:"https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1629301045",
        description: "CSGO is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series.",
        date: "August 2012"
      },
      {
        name: "Valorant",
        price: 0,
        image:"https://s.isanook.com/ga/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2dhLzAvdWQvMjEyLzEwNjM1MjEvdmFsb3JhbnQwMy5qcGc=.jpg",
        description: "Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows.",
        date: "June 2020"
      },
      {
        name: "Dota 2",
        price: 0,
        image:"https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg?t=1630016563",
        description: "Dota 2 is a free-to-play multiplayer online battle arena (MOBA) video game developed and published by Valve.",
        date: "July 2013"
      },
    ]
    
        }
    },methods: {
        previous:function(){
            if(this.index>=1) this.index -= 1;
            const url = this.products[this.index].image;
            const image = document.getElementById("game-img");
            image.src = url;
        },
        next:function(){
            if(this.index<this.products.length) this.index += 1;
            const url = this.products[this.index].image;
            const image = document.getElementById("game-img");
            image.src = url;
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