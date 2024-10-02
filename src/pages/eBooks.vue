<template>
    <Header/>
    <div style="margin-top: 20px;">&nbsp;</div>
    <eBooks/>
    <Footer/>
</template>
<script>
import Header from '@/components/Header.vue';
import eBooks from '@/components/eBooks.vue';
import Footer from '@/components/Footer.vue';


export default{
    components:{
        Header,
        eBooks,
        Footer,
    }
}
</script>