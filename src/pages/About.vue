<template>
    <Header/>
    <div style="margin-top: 40px;">&nbsp;</div>
    <About/>
    <Contact/>
    <Footer/>
</template>
<script>
import Header from '@/components/Header.vue';
import About from '@/components/About.vue';
import Footer from '@/components/Footer.vue';
import Contact from '@/components/Contact.vue';

export default{
    components:{
        Header,
        About,
        Footer,
        Contact
    }
}
</script>