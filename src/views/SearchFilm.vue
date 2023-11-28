<template>
  <div id="search-film">
    <form @submit.prevent="searchFilms">
      <label for="search">Rechercher :</label>
      <input id="search" type="text" ref="boutonrecherche" v-model="query">
    </form>
    <h2>Nombres de films trouvés <strong>{{ query }}</strong> :
        {{ numberResults }}
    </h2>
        <ul class="films" >
            <Film v-for="film in films" :key="film.title" :film="film" />
  
        </ul>
    
  </div>
</template>

<script>
import Film from '../components/Film.vue';
import FilmService from '@/services/FilmService.js';

export default {
    components: 
        {Film},
        mounted() {
            this.$refs.boutonrecherche.focus()
        },
data () {
        return {
            title:"authentification",
            email: '',
            password: '',
            query: '',
            loggedIn: false, 
            films: []

        }
    },
    computed:{
        filterFilms () {
            return this.films.filter(film => {
                return film.title.toLowerCase().includes(this.query.toLowerCase())
            })
        },
        numberResults () {
            return this.films.length
        }
    },
    methods: {
        async searchFilms() { 
            this.films = await FilmService.search(this.query)
            
        },
}}
    


</script>