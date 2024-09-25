<template>
    <Header/>
    <div style="margin-top: 40px;">&nbsp;</div>
    <Testimony/>
    <Footer/>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Testimony from '@/components/Testimony.vue';

export default{
    components:{
        Header,
        Testimony,
        Footer
    }
}
</script>