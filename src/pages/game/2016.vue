<template>

    <p> {{products[index].name}}</p>
    <div id="img-container">
        <img src="https://gamehunt.co/wp-content/uploads/2020/08/Forza-Horizon-3-scaled.jpg" id="game-img">
    </div>
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
        name: "Forza Horizon 3",
        price: 19.41,
        image:"https://gamehunt.co/wp-content/uploads/2020/08/Forza-Horizon-3-scaled.jpg",
        description: "THIS IS YOUR HORIZON You’re in charge of the Horizon Festival. Customize everything, hire and fire your friends, and explore Australia in over 350 of the world’s greatest cars. Make your Horizon the ultimate celebration of cars, music, and freedom of the open road. How you get there is up to you.",
        date: "September 2016"
      },
      {
        name: "Titanfall 2",
        price: 29.99,
        image:"https://thumbor.4gamers.com.tw/OC4DkxHUMgvwwvPWFjM5lex1LqM=/800x0/filters:extract_cover():no_upscale():quality(80)/https%3A%2F%2Fimg.4gamers.com.tw%2Fckfinder-th%2Fimage2%2Fauto%2F2021-05%2Ftitanfall-2-header-210501-104215.jpg%3FversionId%3Dl8F8N9rKhQWr3S3.Mqjndw06GcVJ1_qx",
        description: "Respawn Entertainment gives you the most advanced titan technology in its new, single player campaign & multiplayer experience. Combine & conquer with new titans & pilots, deadlier weapons, & customization and progression systems that help you and your titan flow as one unstoppable killing force.",
        date: "October 2"
      },
      {
        name: "Planet Coaster",
        price: 43.20 ,
        image:"https://zaagame.com/wp-content/uploads/2021/05/PC_Console_Keyart_Logo_1920.jpg",
        description: "Planet Coaster® - the future of coaster park simulation games has arrived! Surprise, delight and thrill incredible crowds as you build your coaster park empire - let your imagination run wild, and share your success with the world.",
        date: "November 2016"
      },
      {
        name: "DEUS EX: Mankind Divided",
        price: 57.56,
        image:"https://image.api.playstation.com/cdn/UP0082/CUSA01799_00/8gRSa3fSIAWC17rZwPDqz96cHOiGf7Qb.png",
        description: "Now an experienced covert operative, Adam Jensen is forced to operate in a world that has grown to despise his kind. Armed with a new arsenal of state-of-the-art weapons and augmentations, he must choose the right approach, along with who to trust, in order to unravel a vast worldwide conspiracy.",
        date: "August 2020"
      },
      {
        name: "Overwatch",
        price: 19.99,
        image:"https://www.online-station.net/wp-content/uploads/2021/05/Overwatch-1.jpg",
        description: "Blending elements from Team Fortress 2, MOBAs, and Blizzard’s own extended universe, Overwatchcemented itself as the multiplayer PC game of 2016 – not even the likes of Battlefield and COD could topple it.",
        date: "May 2016"
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
    #game-img{
        max-height: 550px;
        text-align: center;
    }
    p{
        font-size: 30px;
    }
</style>