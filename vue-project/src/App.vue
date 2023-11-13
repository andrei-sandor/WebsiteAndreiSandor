<template>
  <div class="navigator">
   <nav>
    <router-link class="nav-item" to="/">Home</router-link>
    <router-link class="nav-item" to="/test">School</router-link>
    <router-link class="nav-item" to="/experience">Experience</router-link>
    <router-link class="nav-item" to="/test">Projects</router-link>
    <router-link class="nav-item" to="/test">Tutoring</router-link>
    <router-link class="nav-item" to="/test">Links</router-link>
    
  </nav>
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: blue;
  
  

}
.nav {
 
}

.navigator{
  align: center;
  margin-top: -400px;
  margin-left: 350px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
.nav-item {
    color: rgb(69, 9, 235);
    text-decoration: none;
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 5px;
   
}
</style>