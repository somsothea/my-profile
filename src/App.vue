<template>
<router-view></router-view>
</template>
<script>
import AOS from 'aos'
export default {
    created ( ) {
        AOS.init()
    }
}
</script>
