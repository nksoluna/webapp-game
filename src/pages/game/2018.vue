<template>
    <div id="container">
    <blog-card></blog-card>
    </div>

    <div type="text/x-template" id="blog-card">
    <a class="card-link">
      <article class="blog-card">
        <img id="post-image" src="https://images-na.ssl-images-amazon.com/images/I/71fVgjHw8yL.jpg">
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
        name: "God of War",
        price: 19.99,
        image:"https://images-na.ssl-images-amazon.com/images/I/71fVgjHw8yL.jpg",
        description: "God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment (SIE).",
        date: "April 2018"
      },
      {
        name: "MONSTER HUNTER: WORLD",
        price: 29.99,
        image:"https://image.api.playstation.com/vulcan/img/cfn/11307w1cgpWhpZ4A6XhLYZL8FEwerYV6dfbaxRb0fkbbnX8QNN90rGAIcyRqRJhCEHWcwpO3gK8EF8D7vUlmJhjEzZkbASBB.png",
        description: "Monster Hunter: World is an action role-playing game developed and published by Capcom and the fifth mainline installment in the Monster Hunter series.",
        date: "January 2018"
      },
      {
        name: "Overcooked 2",
        price: 24.99,
        image:"https://image.api.playstation.com/cdn/EP4064/CUSA10870_00/xWWemobK1Xc5DLDDWaeHgQPX4qUlNjYKEBVfjXfEwb3sIvR5aMNaFfJo9tfvhVDY.png",
        description: "Overcooked 2 is a cooperative cooking simulation video game developed by Team17 alongside Ghost Town Games, and published by Team17.",
        date: "August 2018"
      },
      {
        name: "RED DEAD REDEMPTION 2",
        price: 40.19,
        image:"https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
        description: "Red Dead Redemption 2[a] is a 2018 action-adventure game developed by Rockstar Studios and published by Rockstar Games.",
        date: "November 2018"
      },
      {
        name: "Assassin’s Creed Odyssey",
        price: 59.99,
        image:"https://cf.shopee.co.th/file/f9277aa908577a90d6223f1e41327dd2",
        description: "Assassin's Creed Odyssey is an action role-playing video game developed by Ubisoft Quebec and published by Ubisoft.",
        date: "October 2018"
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
