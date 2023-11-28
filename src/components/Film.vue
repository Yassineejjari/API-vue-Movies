<script>
export default {
  props: ['film'],
  methods: {
    
    numberOfStars (film) {
            return '⭐'.repeat(Math.floor(film.metascore / 100 * 5))
        }
  }
}
</script>
<template>
    <li class="film card" >
    <img class="poster" :src="film.poster" />
    <p class="title">
      {{ film.title }}
      <span class="rating">{{ numberOfStars(film) }}</span>
    </p>
    <dl>
      <dt>Release date</dt><dd>{{ film.released }}</dd>
      <dt>Director</dt><dd>{{ film.director }}</dd>
      <dt>Actors</dt><dd>{{ film.actors }}</dd>
    </dl>
    <p class="plot">
        {{ film.plot }}
    </p>
  </li>
</template>