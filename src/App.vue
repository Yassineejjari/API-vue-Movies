<script>
import LoginForm from './views/LoginForm.vue'
import Exodeu from './components/Exodeu.vue';
import SearchFilm from './views/SearchFilm.vue';
import Film from './components/Film.vue';
import { useSession } from "@/stores/session"
import { mapState, mapActions } from "pinia";
import Header from './components/Header.vue';



export default {

data() {
  return {
  }
},
computed: {
        // bind this.loggedIn to useSession().loggedIn
        ...mapState(useSession, ["loggedIn"])
    },
components: {
  LoginForm,
  SearchFilm,
  Film,
  Header
}
}
</script>

<template>
  <header>

    <div class="wrapper">
      <Header/>
      <router-view />
    </div>
  </header>

  <main>
  </main>
</template>

<style scoped>



header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>
