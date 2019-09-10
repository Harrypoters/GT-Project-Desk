<template>
    <div id="home">
        <Header></Header>
        <Carousel></Carousel>
        <Footer></Footer>
    </div>
</template>
<script>

import Header from '@/components/Header/Header'
import Carousel from '@/components/Header/Carousel'
import Footer from '@/components/Header/Footer'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    Header,
    Carousel,
    Footer
  }
}
</script>
