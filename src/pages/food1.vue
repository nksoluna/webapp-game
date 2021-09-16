<template>

    <p> Hello {{value}}</p>
    <img
      alt="Test"
      src="~assets/2014.jpg"
      style="width: 200px; height: 200px"
    >
    
</template>
<script>

export default{
    data() {
        return {
            value: 15,
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