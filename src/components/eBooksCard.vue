<template>
    <div class="card">
      <a :href="amazonbookurl" target="_blank"><img :src="bookimage" class="card-img-top" alt="booktitle"></a>
      <div class="card-body">
        <a :href="amazonbookurl"><h5 class="card-title">{{ booktitle }}</h5></a>
        <p class="card-text">{{ bookdescription }}</p>
      </div>
    </div>
    </template>
    <script>
        export default{
            props: ["booktitle", "bookimage", "bookdescription", "bookauthor", "bookpublisher","bookisbn","amazonbookurl"],
        };
        
    </script>
    
    