<template>

    <p> Dragon Age: Inquisition {{index}}</p>
    <img
      alt="Test"
      src="~assets/2014.jpg"
      style="width: 200px; height: 200px"
    >
    <p>{{text[index]}}</p>
    
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
            text:["Dragon Age: Inquisition is a 2014 action role-playing video game developed by BioWare and published by Electronic Arts. The third major game in the Dragon Age franchise, Inquisition is the sequel to Dragon Age II (2011). The story follows a player character known as the Inquisitor on a journey to settle the civil unrest in the continent of Thedas and close a mysterious tear in the sky called the \"Breach\", which is unleashing dangerous demons upon the world. Dragon Age: Inquisition's gameplay is similar to its predecessors, although it consists of several semi-open worlds for players to explore. Players control the Inquisitor or their companions mainly from a third-person perspective, although a traditional role-playing game top-down camera angle is also available.",
            "The release of Dragon Age II was met with a mixed reception from players who lamented the loss of the complexity of the first game, Dragon Age: Origins (2009). BioWare sought to address player feedback for Dragon Age II as a major goal, which influenced the design decisions of its sequel. Ultimately, BioWare wanted the third Dragon Age game to combine the elements of the first two games in the series. Having begun development in 2011, BioWare used EA DICE's Frostbite 3 engine to power the game, though this created many development challenges for the team. They had to crunch extensively during development, and because of hardware limitations on older generation consoles several gameplay features had to be cut. Trevor Morris composed the game's soundtrack, replacing Inon Zur, the composer used for the previous games."
            ],
        }
    },methods: {
        previous:function(){
            if(this.index>=1) this.index -= 1;
        },
        next:function(){
            if(this.index<1) this.index += 1;
        }
    },
    setup() {
    },
}
</script>

<style scoped>
    p{
        font-size: 50px;
    }
</style>