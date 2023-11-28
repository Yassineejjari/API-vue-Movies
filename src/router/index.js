/** src/router/index.js **/
import { createRouter, createWebHistory } from 'vue-router'
import SearchFilm from '../views/SearchFilm.vue';
import LoginForm from '../views/LoginForm.vue';
import { useSession } from '../stores/session';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginForm
    },
    {
        path: "/search",
        name: "search",
        component: SearchFilm
      },
      {
          path:"/",
          redirect:"/search",
      },
      {
          path:'/:pathMatch(.*)*',
          redirect:"/search"
      },
  ]
});
router.beforeEach(async (to, from) => {
  const session = useSession()
  if (
    // make sure the user is authenticated
    !session.loggedIn &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'login'
  ) {
    // redirect the user to the login page
    return { name: 'login' }
  } else if (to.name === 'login' && session.loggedIn) {
      return { name: 'search'}
  }
})
  
export default router;