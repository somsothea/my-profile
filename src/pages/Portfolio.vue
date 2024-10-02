<template>
    <Header/>
    <div style="margin-top: 60px;">&nbsp;</div>
    <Portfolio/>
    <Testimony/>
    <Footer/>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Portfolio from '@/components/Portfolio.vue';
import Testimony from '@/components/Testimony.vue';

export default{
    components:{
        Header,
        Portfolio,
        Footer,
        Testimony
    }
}
</script>