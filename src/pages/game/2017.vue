<template>
    <div id="container">
    <blog-card></blog-card>
    </div>

    <div type="text/x-template" id="blog-card">
    <a class="card-link">
      <article class="blog-card">
        <img id="post-image" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/f04e3c008c323b2a08699b960df90dfb.png">
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
        name: "The Legend of Zelda: Breath of the Wild",
        price: 53.94,
        image:"https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/f04e3c008c323b2a08699b960df90dfb.png",
        description: "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. Breath of the Wild is part of The Legend of Zelda franchise and is set at the end of the Zelda timeline. The player controls Link, who awakens from a hundred-year slumber to defeat Calamity Ganon and save the kingdom of Hyrule.",
        date: "March 2017"
      },
      {
        name: "What Remains of Edith Finch",
        price: 5.99,
        image:"https://image.api.playstation.com/cdn/UP2470/CUSA06886_00/zuwK32Ei2BhWDkLAPA7NNVtlLy2uZzjZQSXCs4sEfFVn4iBcI6kejdfDMxuJOpHi.png",
        description: "What Remains of Edith Finch is a 2017 adventure game developed by Giant Sparrow and published by Annapurna Interactive. The game centers on the character of Edith, a member of the Finch family, afflicted by a perceived curse that causes all but one member of each generation to die in unusual ways. The game was released for Microsoft Windows, PlayStation 4 and Xbox One in 2017, and for Nintendo Switch in 2019.",
        date: "April 2017"
      },
      {
        name: "Cuphead",
        price: 19.99,
        image:"https://external-preview.redd.it/x-5t4ldQa4BYFJiMdhxECjGdaaBpPSE0neG0kwRTvtE.jpg?auto=webp&s=e0ab99c5571de1b058d6a2429943e34067d26b55",
        description: "Cuphead is a 2017 run and gun video game developed and published by Studio MDHR. The game was inspired by the rubber hose style of animation used in cartoons from the golden age of American animation, such as the work of Walt Disney Animation Studios and Fleischer Studios, and sought to emulate their subversive and surrealist qualities.",
        date: "September 2017"
      },
      {
        name: "Nier: Automata",
        price: 39.99,
        image:"https://image.api.playstation.com/cdn/HP0082/CUSA06592_00/O9k8kwZ1hbPiFTXYN2DJ2G5XxLik6gJEBd19vNPN1jSAJIVyD9fgxrkdkUIiErJw.png",
        description: "Nier: Automata is a 2017 action role-playing game developed by PlatinumGames and published by Square Enix. It is a sequel to the 2010 video game Nier, itself a spin-off and sequel of the Drakengard series. The game originally released for the PlayStation 4 and Windows via Steam, with an Xbox One port being published the following year with the subtitle Become As Gods Edition.",
        date: "Febuary 2017"
      },
      {
        name: "Hellblade: Senua's Sacrifice",
        price: 29.99,
        image:"https://image.api.playstation.com/cdn/EP8941/CUSA07527_00/1ctKqm7qNbvS539Uzea6wIhPCp8Fsp32.png",
        description: "Hellblade: Senua's Sacrifice is an action-adventure game developed and published by the British video game development studio Ninja Theory. Set in a dark fantasy world inspired by Norse mythology and Celtic culture, the game follows Senua, a Pict warrior who must make her way to Helheim by defeating otherworldly entities and facing their challenges, in order to rescue the soul of her dead lover from the goddess Hela. It was released worldwide for Microsoft Windows and PlayStation 4 in August 2017, Xbox One in April 2018, Nintendo Switch in April 2019, and Xbox Series X and Series S in August 2021. Hellblade features support for virtual reality, which was added in a 2018 update.",
        date: "August 2017"
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
    height: 27.25rem;
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
    display: flex;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }
  
  @media (max-width: 40rem) {
    .blog-card {
      grid-template-columns: auto;
      grid-template-rows: 12rem 1fr;
    }
  }

 
}
</style>
