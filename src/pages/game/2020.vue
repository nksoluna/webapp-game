<template>
    <div id="container">
    <blog-card></blog-card>
    </div>

    <div type="text/x-template" id="blog-card">
    <a class="card-link">
      <article class="blog-card">
        <img id="post-image" src="http://www.pubgmobile.com/common/images/icon_logo.jpg">
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
                name: "PUBG",
                image: "http://www.pubgmobile.com/common/images/icon_logo.jpg",
                price: 400,
                description: "PlayerUnknown's Battlegrounds (PUBG, also known as PUBG: Battlegrounds) is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole. The game is based on previous mods that were created by Brendan PlayerUnknown Greene for other games, inspired by the 2000 Japanese film Battle Royale, and expanded into a standalone game under Greene's creative direction. In the game, up to one hundred players parachute onto an island and scavenge for weapons and equipment to kill others while avoiding getting killed themselves. The available safe area of the game's map decreases in size over time, directing surviving players into tighter areas to force encounters. The last player or team standing wins the round.",
                date: "August 2018"
              },
              {
                name: "CSGO",
                image: "http://s01.riotpixels.net/data/3e/41/3e4179b1-3e5a-4e6b-aaac-675af5c1edde.jpg/cover.counter-strike-global-offensive.1024x1024.2014-04-24.51.jpg",
                price: 300,
                description: "Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series. Developed for over two years, Global Offensive was released for Windows, macOS, Xbox 360, and PlayStation 3 in August 2012, and for Linux in 2014. Valve still regularly updates the game, both with smaller balancing patches and larger content additions.",
                date: "August 2012"
              },
              {
                name: "Valorant",
                image: "https://www.beartai.com/wp-content/uploads/2020/08/22fb58edf935d6152eee31de1d37827e-1024x1024.jpg",
                price: 0,
                description: "Valorant (stylized as VALORANT) is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows. First teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by an official release on June 2, 2020. The development of the game started in 2014.",
                date: "June 2020"
              },
              {
                name: "Dota 2",
                image: "https://www.ipadwallpaper.net/uploads/wallpapers/2012/06/1327-Dota2-logo-wallpaper.jpg",
                price: 0,
                description: "Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve. The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos. Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map. Each of the ten players independently controls a powerful character, known as a hero, who all have unique abilities and differing styles of play. During a match players collect experience points and items for their heroes to successfully defeat the opposing team's heroes in player versus player combat. A team wins by being the first to destroy the other team's Ancient, a large structure located within their base.",
                date: "July 2013"
              },
              {
                name: "The Last of Us Part II",
                image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png",
                price: 600,
                description: "The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4. Set five years after The Last of Us (2013), the game focuses on two playable characters in a post-apocalyptic United States whose lives intertwine: Ellie, who sets out for revenge after suffering a tragedy, and Abby, a soldier who becomes involved in a conflict between her militia and a religious cult. The game is played from the third-person perspective and allows the player to fight human enemies and cannibalistic zombie-like creatures with firearms, improvised weapons, and stealth.",
                date: "May 2020"
              }
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
    display: grid;
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
