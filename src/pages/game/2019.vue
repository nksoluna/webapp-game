<template>
    <div id="container">
    <blog-card></blog-card>
    </div>

    <div type="text/x-template" id="blog-card">
    <a class="card-link">
      <article class="blog-card">
        <img id="post-image" src="https://cdn.wallpapersafari.com/90/0/LI0eBp.jpg">
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
        name: "Sekiro: Shadows Die Twice",
        price: 59.99,
        image:"https://cdn.wallpapersafari.com/90/0/LI0eBp.jpg",
        description: "Sekiro: Shadows Die Twice is an action-adventure game developed by FromSoftware and published by Activision. The game follows a shinobi known as Sekiro as he attempts to take revenge on a samurai clan who attacked him and kidnapped his lord.",
        date: "March 22, 2019"
      },
      {
        name: "Resident Evil 2",
        price: 39.99,
        image:"https://lh3.googleusercontent.com/proxy/ixmKbZY9p0bAVhg_ah_8DU3-PlheY-eJLTWKct0-cALlRNeSRtosc1a90hdpcB0mKNE4KzZxRNu_y_G0JiqX4Fcm7DltIyCUgtCDHsyxlJ3tJjRq39X68s5u4RYtU6O3E4bRFwmWbA",
        description: "Resident Evil 2 is a 2019 survival horror game developed and published by Capcom. A remake of the 1998 game of the same name, it was released for Microsoft Windows, PlayStation 4, and Xbox One on January 25, 2019. Players control rookie police officer Leon S. Kennedy and college student Claire Redfield as they attempt to escape Raccoon City during a zombie outbreak.",
        date: "January 25, 2019"
      },
      {
        name: "Death Stranding",
        price: 59.99 ,
        image:"https://image.api.playstation.com/vulcan/img/rnd/202010/2715/ccTNECyr1IGEMh28b63gZzOv.png",
        description: "Death Stranding is an action game developed by Kojima Productions. It is the first game from director Hideo Kojima and Kojima Productions after their split from Konami in 2015. It was released by Sony Interactive Entertainment for the PlayStation 4 in November 2019 and by 505 Games for Windows in July 2020.",
        date: "November 8, 2019"
      },
      {
        name: "Super Smash Bros. Ultimate",
        price: 59.99,
        image:"https://external-preview.redd.it/n4jv213CGeaYvaHmwNOpOb_X4Q0CddoAQd2G90GAgkU.jpg?auto=webp&s=27b78230c366c71b811480a492bfbdb05894000a",
        description: "Super Smash Bros. Ultimate is a 2018 crossover fighting game developed by Bandai Namco Studios and Sora Ltd. and published by Nintendo for the Nintendo Switch. It is the fifth installment in the Super Smash Bros. series, succeeding Super Smash Bros. for Nintendo 3DS and Wii U. The game follows the series' traditional style of gameplay: controlling one of the various characters, players must use differing attacks to weaken their opponents and knock them out of an arena. It features a wide variety of game modes, including a campaign for single-player and multiplayer versus modes. Ultimate features over 80 playable fighters, including everyone from all previous Super Smash Bros. games alongside several newcomers. The roster ranges from Nintendo mascots to characters from third-party franchises, with the game being supported with post-release downloadable content that adds more fighters and other content.",
        date: "December 7, 2018"
      },
      {
        name: "The Outer Worlds",
        price: 59.99,
        image:"https://image.api.playstation.com/vulcan/img/cfn/11307bce4B5hVI6jiAtsB-7Q5rpQEzjwosGAyPA-NewqLwMsyg6VnBcO8s-0dOzmlWGnhaXt7MuHeHjBeu7QUuW0ivEw2gii.png",
        description: "The Outer Worlds is a single-player sci-fi role-playing video game developed by Obsidian Entertainment and published by Private Division. It was released on PC, PlayStation 4 and Xbox One (Game Pass) on October 25, 2019. The Nintendo Switch version was released on June 5, 2020. A DLC called Peril on Gorgon was released on September 9, 2020.",
        date: "October 25, 2019"
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
