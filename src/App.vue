<template>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><code id="brand">Edu-link</code></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li><router-link class="router-link" :to="{name:'home'}">Home</router-link> </li>
            <li><router-link class="router-link" :to="{name:'about'}">About</router-link> </li>
            <li><router-link class="router-link" :to="{name:'contact'}">Contact</router-link> </li>
            <li><router-link class="router-link" :to="{name:'help'}">Help</router-link> </li>
           <li> <div class="dropdown">
                  <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                  </a>
                  <ul class="dropdown-menu">
                    <li><router-link class="router-link" :to="{name:'notice'}">Notice</router-link> </li>
                    <li><router-link class="router-link" :to="{name:'blog'}">Blog</router-link> </li>
                    <li><router-link class="router-link" :to="{name:'books'}">Books</router-link> </li>
                    <li><router-link class="router-link" :to="{name:'syllabus'}">Syllabus</router-link> </li>
                    <li><router-link class="router-link" :to="{name:'routine'}">Routine</router-link> </li>
                    <li><router-link class="router-link" :to="{name:'faq'}">FAQ</router-link> </li>
                    <li><router-link class="router-link" :to="{name:'jobs'}">Jobs</router-link> </li>
                    <li><router-link class="router-link" :to="{name:'help'}">Help</router-link> </li>
                  </ul>
              </div></li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
    </div>
  </div>
</nav>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.router-link{
  text-decoration: none;
}

nav a {
  /* font-weight: bold; */
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
.navbar-nav li{
  margin: 5px 10px;
}
#brand{
  font-size: 25px;
  font-weight: bold;
  color: rgb(14, 146, 146);
}

</style>
