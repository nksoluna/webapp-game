<template>
    <div id="container">
    <blog-card></blog-card>
    </div>

    <div type="text/x-template" id="blog-card">
    <a class="card-link">
      <article class="blog-card">
        <img id="post-image" src="https://p1.music.126.net/NBiFVj-UFXSYsa1FHSaoTA==/109951163090777685.jpg">
        <div class="article-details">
          <h3 class="post-title">{{ products[index].name }}</h3>
          <h4 class="post-category">Price : {{ products[index].price }}</h4>
          <p class="post-description">{{ products[index].description }}</p>
          <p class="post-author">Outcome : {{ products[index].date }}</p>
        </div>
      </article>
    </a>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn @click="previous" fab icon="arrow_back_ios" color="blue"  />
            <q-btn @click="next" fab icon="arrow_forward_ios"  color="blue"  />
    </q-page-sticky>
    </div>
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
        image:"https://p1.music.126.net/NBiFVj-UFXSYsa1FHSaoTA==/109951163090777685.jpg",
        description: "THIS IS YOUR HORIZON You’re in charge of the Horizon Festival. Customize everything, hire and fire your friends, and explore Australia in over 350 of the world’s greatest cars. Make your Horizon the ultimate celebration of cars, music, and freedom of the open road. How you get there is up to you.",
        date: "September 2016"
      },
      {
        name: "Titanfall 2",
        price: 29.99,
        image:"https://image.api.playstation.com/cdn/UP0006/CUSA04027_00/TEOBdIrh3q0BLS68ertUAnDoTdli2JR5igqnlFbQYAss7ro57ED3uvItXlj75sn9.png",
        description: "Respawn Entertainment gives you the most advanced titan technology in its new, single player campaign & multiplayer experience. Combine & conquer with new titans & pilots, deadlier weapons, & customization and progression systems that help you and your titan flow as one unstoppable killing force.",
        date: "October 2"
      },
      {
        name: "Planet Coaster",
        price: 43.20 ,
        image:"https://image.api.playstation.com/vulcan/ap/rnd/202101/2616/9zKsZ30q9Mym0jQoQHtZ2V4L.png",
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
        image:"https://image.api.playstation.com/vulcan/ap/rnd/202010/0714/VBANminggz6xesnf7PokdsT4.png",
        description: "Blending elements from Team Fortress 2, MOBAs, and Blizzard’s own extended universe, Overwatchcemented itself as the multiplayer PC game of 2016 – not even the likes of Battlefield and COD could topple it.",
        date: "May 2016"
      },
            ]
        }
    },methods: {
        previous:function(){
            if(this.index>=1) this.index -= 1;
            const url = this.products[this.index].image;
            const image = document.getElementById("post-image");
            image.src = url;
        },
        next:function(){
            if(this.index<this.products.length) this.index += 1;
            const url = this.products[this.index].image;
            const image = document.getElementById("post-image");
            image.src = url;
        }
    },
    setup() {
    },
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

* {
  box-sizing: border-box;
}

body {
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #777;
  background: #eedfcc;
  font-size: 0.9375rem;
  min-height: 100vh;
  margin: 0;
  line-height: 1.6;
  align-items: center;
  justify-content: center;
  text-rendering: optimizeLegibility;
}

#container {
  width: 30rem;
  height: 13.625rem;
}

.blog-card {
  align-items: center;
  display: flex;
  flex-direction: row;
  background: #fff;
  box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  overflow: hidden;
}

.card-link {
  position: relative;
  display: block;
  color: inherit;
  text-decoration: none;
}

#post-image {
  display: block;
  width: 100%;
	object-fit: cover;
}

.article-details {
  padding: 1.5rem;
}

.post-description{
  font-size: 22px;
}

.post-category {
  display: inline-block;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
  border-bottom: 0.125rem solid #ebebeb;
}

.post-title {
  font-size: 70px;
  line-height: 1.4;
  color: #121212;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.post-author {
  font-size: 20px;
  line-height: 1.4;
  font-weight: 700;
  margin: 1.125rem 0 0 0;
  padding: 1.125rem 0 0 0;
  border-top: 0.0625rem solid #ebebeb;
}

@media (max-width: 40rem) {
  #container {
    width: 18rem;
    height: 0rem;
  }
  
  .blog-card {
    flex-wrap: wrap;
  }
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: ". main main ." ". main main .";
  }
  
  #container {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }

  .post-image {
    height: 100%;
  }
  
  .blog-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }
  
  @media (max-width: 40rem) {
    .blog-card {
      display: block;
      grid-template-columns: auto;
      grid-template-rows: 12rem 1fr;
    }
  }
}
</style>
