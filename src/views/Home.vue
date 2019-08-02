<template>
  <div class="home">
    <video autoplay muted loop id="video">
      <source src="../assets/CDTEC.mp4" type="video/mp4">
    </video>
    <div class="content">
      <img alt="Vue logo" src="../assets/CDTEC.png" width="50%">
      <HelloWorld msg="Consultoria Diestre Tecnología"/>
    </div>
    
  </div>
</template>

<style>
#video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
}

/* Add some content at the bottom of the video/page */
.content {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100vw;
  padding: 10vh 0 0 0;
}

</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
