<template>
    <Header/>
    <div style="margin-top: 40px;">&nbsp;</div>
    <Service/>
    <Footer/>
</template>
<script>
import Header from '@/components/Header.vue';
import Service from '@/components/Service.vue';
import Footer from '@/components/Footer.vue';

export default{
    components:{
        Header,
        Service,
        Footer
    }
}
</script>