<template>
    <Header/>
    <div style="margin-top: 40px;">&nbsp;</div>
    <Notfound/>
    <Footer/>
</template>
<script>
import Header from '@/components/Header.vue';
import Notfound from '@/components/Notfound.vue';
import Footer from '@/components/Footer.vue';

export default{
    components:{
        Header,
        Notfound,
        Footer
    }
}
</script>