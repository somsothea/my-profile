<template>
    <Header/>
    <div style="margin-top: 60px;">&nbsp;</div>
    <Portfolio/>
    <Footer/>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Portfolio from '@/components/Portfolio.vue';

export default{
    components:{
        Header,
        Portfolio,
        Footer
    }
}
</script>