<script>
import { useSession } from "@/stores/session"
import UserService from '@/services/UserService.js'


export default {
    data () {
        return {
            title:"authentification",
            email: '',
            password: '',
            error: ''
    }
    },
   
    methods: { 
        async register () {
      this.error = null;
      try {
        const response = await UserService.register({
          email: this.email,
          password: this.password,
          firstname: 'John',
          lastname: 'Smith'
        })
        const session = useSession();
        session.login({ user: response.user, token: response.token });
        this.$router.push('/search')
      } catch (error) {
        this.error = error.toString()
      }
    },
       async login () {
      this.error = null;
      try {
        const response = await UserService.login({ email: this.email, password: this.password })
        const session = useSession();
        session.login({ user: response.user, token: response.token });
        this.$router.push('/search')
      } catch (error) {
        this.error = error.toString()
      }
            
        },
    }
    
    

}


</script>
<template>

<div id="login-form" v-if="!loggedIn">
        <form @submit.prevent="">
        <h1>{{ title }}</h1>
        <p>Remplissez ce formulaire pour vous connecter.</p>
        <hr>
        
        <label for="email"><b>Email</b></label>
        <input type="text" v-model ="email" placeholder="Entrez votre courriel" id="email" name="email" required>
        
        <label for="psw"><b>Mot de passe</b></label>
        <input type="password" v-model="password" placeholder="Entrez votre mot de passe" id="psw" name="psw" required>
        
        <p><button type="submit" @click="login">Se connecter</button></p>
        <p><button type="submit" @click="register">S'inscrire</button></p>
        <p>{{ error }}</p>
        </form>
    </div>

    


</template>
    