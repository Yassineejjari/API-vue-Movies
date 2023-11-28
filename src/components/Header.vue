<template>
    <div>
        <RouterLink :to="{name: 'search'}">Films</RouterLink>
        <RouterLink :to="{name: 'login'}">login</RouterLink>
    </div>
    <div v-if="!loggedIn"></div>
    <div id="header" v-else>
        <div class="flex">
            <div>Bonjour, {{ user.email }}</div>
        <div>
            <a @click ="deconnection">Se déconnecter</a>
        </div>
    </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { useSession } from "@/stores/session";
export default {
    data() {
        return {
        }
    },
    methods: {
        deconnection () {
            this.logout()
            this.$router.push('login');
        },
        ...mapActions(useSession, ["logout"])
    },
    computed: {
        ...mapState(useSession, ["loggedIn", "user"])
    }
}
</script>