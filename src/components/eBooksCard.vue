<template>
    <div class="card" >
      <img :src="bookimage" class="card-img-top" alt="booktitle" width="100%">
      <div class="card-body">
        <router-link :to="amazonbookurl" :target="_blank"><h5 class="card-title">{{ booktitle }}</h5></router-link>
        <!--<a :href="link" class="btn btn-primary">Pay Now</a>-->
        <p class="card-text">{{ bookdescription }}</p>
      </div>
    </div>
    </template>
    <script>
        export default{
            props: ["booktitle", "bookimage", "bookdescription", "bookauthor", "bookpublisher","bookisbn","amazonbookurl"],
        };
    </script>
    
    