
<script>
export default {
  data(){
    return {
      likesVue: true,
      logo: 'https://vuejs.org/images/logo.png',
      logoWidth: 50
    }
  }
}
</script>

<template>
    <h1>
        I {{likesVue ? "love" : "hate"}}
        <img :src="logo" :width="logoWidth" />
    </h1>
 </template>
    

    