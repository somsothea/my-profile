<template>
    <div class="container my-5"  data-aos="fade-up" data-aos-duration="3000">
        <div class="p-5 text-center bg-body-tertiary rounded-3">
                <h1 class="text-body-emphasis">All Books Api</h1>
                <p class="lead">
                    This is a powerful Real time book data retrival API that fetches the top books for NY times with book Title, Image, Description, Author, Publisher, Amazon Url, Isbn and Book rank.</p>
        </div>
        <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4">
            <eBooksCard
            v-for="(item, index) in books"
            :key="index"
            :booktitle="item.bookTitle"
            :bookimage="item.bookImage"
            :bookdescription="item.bookDescription"
            :bookauthor="item.bookAuthor"
            :bookpublisher="item.bookPublisher"
            :bookisbn="item.bookIsbn"
            :amazonbookurl="item.amazonBookUrl"
            ></eBooksCard>
        </div>
    </div>
</template>
<script>
import eBooksCard from '@/components/eBooksCard.vue';
import axios from "axios";

export default({
    components: {eBooksCard},
    data() {
        return{books:[],
        };
    },
    async created(){
        const options = {
        method: 'GET',
        url: 'https://all-books-api.p.rapidapi.com/getBooks',
        headers: {
            'x-rapidapi-key': '403e5cee3cmsh74fe68adfb0b2a7p108627jsn80460239f639',
            'x-rapidapi-host': 'all-books-api.p.rapidapi.com'
        }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            const books = response.data;
            this.books = books;
        } 
        catch (error) 
        {
            console.log(error);
        }
    }
    
});

</script>
