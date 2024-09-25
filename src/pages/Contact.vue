<template>
    <Header/>
    <div style="margin-top: 40px;">&nbsp;</div>
    <Contact/>
    <Footer/>
</template>
<script>
import Header from '@/components/Header.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';

export default{
    components:{
        Header,
        Contact,
        Footer
    }
}
</script>