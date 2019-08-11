<template>
  <div class="login">
    <video autoplay muted loop id="video">
      <source src="../assets/CDTEC.mp4" type="video/mp4">
    </video>
    <div class="content">      
      <!--<HelloWorld msg="Consultoria Diestre Tecnología"/>-->
      <div class="col col-md-4 offset-md-4 col-sm-10 offset-sm-1" style="background:rgba(255,255,255, 0.2);">
        
        <div class>
          <div class="text-center">
            <img alt="Vue logo" src="../assets/icon.png" class="img-fluid">
            <hr>
          </div>
          <form class="user">
            <div class="form-group">
              <input type="email" class="form-control form-control-user" aria-describedby="emailHelp" placeholder="Enter Email Address...">
            </div>
            <div class="form-group">
              <input type="password" class="form-control form-control-user" placeholder="Password">
            </div>
            <div class="form-group">
              <div class="custom-control custom-checkbox small">
                <input type="checkbox" class="custom-control-input" id="customCheck">
                <label class="custom-control-label" for="customCheck">Remember Me</label>
              </div>
            </div>
            <a href="/dashboard" class="btn btn-primary btn-user btn-block style-module_btn-gradient_2UuQj">
              Login
            </a>            
          </form>
          <hr>
          <hr>
          <hr>
        </div>
      </div>      
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
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  color: #f1f1f1;
  padding: 10vh 0 0 0;
}



</style>

<script>
// @ is an alias to /src
/*
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    Login
  }
}
*/
</script>
