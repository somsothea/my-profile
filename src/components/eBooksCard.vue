<template>
    <div class="card">
      <img :src="bookimage" class="card-img-top" alt="booktitle">
      <div class="card-body">
        <router-link :to="amazonbookurl" :target="_blank"><h5 class="card-title">{{ booktitle }}</h5></router-link>
        <p class="card-text">{{ bookdescription }}</p>
      </div>
    </div>
    </template>
    <script>
        export default{
            props: ["booktitle", "bookimage", "bookdescription", "bookauthor", "bookpublisher","bookisbn","amazonbookurl"],
        };
    </script>
    
    