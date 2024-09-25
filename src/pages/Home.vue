<template>
    <Header/>
    <Hero/>
    <Service/>
    <Portfolio/>
    <Testimony/>
    <About/>
    <Contact/>
    <Footer/>
</template>
<script>
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import Service from '@/components/Service.vue';
import Portfolio from '@/components/Portfolio.vue';
import Testimony from '@/components/Testimony.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';

export default{
    components:{
        Header,
        Hero,
        Service,
        Portfolio,
        Testimony,
        About,
        Contact,
        Footer
    }
}
</script>
