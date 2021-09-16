<template>
    <div id="container">
    <blog-card></blog-card>
    </div>

    <div type="text/x-template" id="blog-card">
    <a class="card-link">
      <article class="blog-card">
        <img id="post-image" src="https://cdn.shopify.com/s/files/1/2615/4500/products/24_57_09863a6d-b348-4321-817c-f1de05dc1fda_1024x.jpg?v=1517294489">
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
        name: "Uncharted 4: A Thief's End",
        price: 59.99,
        image:"https://cdn.shopify.com/s/files/1/2615/4500/products/24_57_09863a6d-b348-4321-817c-f1de05dc1fda_1024x.jpg?v=1517294489",
        description: "Uncharted 4: A Thief's End is a  action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment It is the fourth main entry in the Uncharted series. Set several years after the events of Uncharted 3: Drake's Deception, players control Nathan Drake, a former treasure hunter coaxed out of retirement by his presumed-dead brother Samuel.",
        date: "May 2015"
      },
      {
        name: "Overwatch",
        price: 29.99,
        image:"https://image.api.playstation.com/vulcan/ap/rnd/202010/0714/VBANminggz6xesnf7PokdsT4.png",
        description: "Overwatch is a team-based multiplayer first-person shooter game developed and published by Blizzard Entertainment. Overwatch assigns players into two teams of six, with each player selecting from a large roster of characters, known as heroes, with unique abilities.",
        date: "April 2015"
      },
      {
        name: "Pokémon Sun and Moon",
        price: 19.99,
        image:"https://upload.wikimedia.org/wikipedia/en/b/ba/Pokemon_Sun_Boxart.jpg",
        description: "Pokémon Sun and Moon are role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the seventh generation of the Pokémon video game series. First announced in February 2015, Sun and Moon were released worldwide on 18 November 2015, commemorating the franchise's 20th anniversary.",
        date: "September 2015"
      },
      {
        name: "Splatoon",
        price: 29.99,
        image:"https://tinfoil.media/i/0100F8F0000A2000/0/0/a0af3e5f59b543af010e54c664c53fa17f66c37098418ba73b45aa6b43ac6f0d",
        description: "Splatoon is a third-person shooter video game franchise created by Hisashi Nogami, and developed and owned by Nintendo. The series features fictional, anthropomorphic cephalopodic characters known as Inklings and Octolings, based on squids and octopus respectively, that transform between humanoid and cephalopod forms at will.",
        date: "Febuary 2015"
      },
      {
        name: "My Friend Pedro",
        price: 19.99,
        image:"https://tinfoil.media/i/010031200B94C000/0/0/1fd8075f3740ab5b964f93baabb51b094036ed29073ed0ddd6f39e0900a4ae85",
        description: "My Friend Pedro is is a shoot 'em up video game developed by DeadToast Entertainment and published by Devolver Digital. The game was released for Microsoft Windows and Nintendo Switch on 20 June 2015 and for Xbox One on 5 December 2015.A PlayStation 4 port of the game was released on 2 April 2015. My Friend Pedro is based on an Adobe Flash game named MFP: My Friend Pedro that was released by Adult Swim Games in 2014.",
        date: "July 2015"
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
