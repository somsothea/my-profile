<template>
     <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
      <div class="container-fluid ">
        <a class="navbar-brand" href="/"><img src="images/logo.png" width="40">&nbsp;&nbsp;My Profile</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="nav navbar-pills" id="navbarCollapse">
          <ul class="nav nav-pills">
            <li class="nav-item"><router-link to="/" class="nav-link" :class="{active: $route.path == '/'}" aria-current="page">{{$t('Home')}}</router-link></li>
            <li class="nav-item"><router-link to="/service" class="nav-link" :class="{active: $route.path == '/service'}">{{$t('Services')}}</router-link></li>
            <li class="nav-item"><router-link to="/portfolio" class="nav-link" :class="{active: $route.path == '/portfolio'}">{{$t('Portfolio')}}</router-link></li>           
            <li class="nav-item"><router-link to="/eBook" class="nav-link" :class="{active: $route.path == '/eBook'}">{{$t('eBook')}}</router-link></li>
            <li class="nav-item"><router-link to="/about" class="nav-link" :class="{active: $route.path == '/about'}">{{$t('About')}}</router-link></li>         
            <li class="navbar-brand"><img src="images/cambodia.png" @click="changeLocale('khm')" width="25"/></li>
            <li class="navbar-brand"><img src="images/usa.png" @click="changeLocale('en')" width="25"/></li>
          </ul>
        </div> 
      </div>
    </nav>
  </header>
</template>

  <script>
  export default {
    name: 'App',
    methods: {
      changeLocale(locale) {
        this.$i18n.locale = locale
      }
    }
  }
  </script>