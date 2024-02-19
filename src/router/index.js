import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
// import HomeView from '../views/HomeView.vue'

// importing views
import LandingPage from '../views/LandingPage.vue'
import HelloUser from '../views/HelloUser.vue'
import LoginAndSignIn from '../views/LoginAndSignIn.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import GameView from '../views/GameView.vue'
// importing components
import addFlashcard from '../components/AdminDashboardCmp/addFlashcard.vue'
import addQuestionSection from '../components/AdminDashboardCmp/addQuestionSection.vue'

// children for HelloUser- User Dashboard
import UserFeed from '../components/UserDashboardCmp/UserFeed.vue'
import TheResources from '../components/UserDashboardCmp/TheResources.vue'
import ArticlesList from '../components/UserDashboardCmp/ArticlesList.vue'
import FavoriteCards from '../components/UserDashboardCmp/FavoriteCards.vue'
import UsersFavorites from '../components/UserDashboardCmp/UsersFavorites.vue'
// children for AdminDashboard
// childern for Login Vue
import LoginForm from '../components/LoginCmp/LoginForm.vue'
import SignUpForm from '../components/LoginCmp/SignUpForm.vue'
// import addFlashcard from '../components/AdminDashboardCmp/addFlashcard.vue'
// import addQuestionSection from '../components/AdminDashboardCmp/addQuestionSection.vue'
import deleteQuestions from '../components/AdminDashboardCmp/deleteQuestions.vue'
import EditResources from '../components/AdminDashboardCmp/EditResources.vue'
import StartScreen from '../components/FlashcardGame/StartScreen.vue'
// import ShowQuestion from '../components/AdminDashboardCmp/ShowQuestion.vue'
import ShowQuestion from '../components/AdminDashboardCmp/showQuestion.vue'
//
import TheArticles from '../views/TheArticles.vue'
// router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing Page',
      component: LandingPage
    },

    // user dashboard

    {
      path: '/HelloUser',
      component: HelloUser,
      // meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'UserFeed',
          component: UserFeed
        },
        {
          path: 'TheResources',
          name: 'TheResources',
          component: TheResources
        },
        {
          path: 'ArticlesList',
          name: 'ArticlesList',
          component: ArticlesList
        },
        {
          path: 'FavoriteCards',
          name: 'FavoriteCards',
          component: FavoriteCards
        },
        {
          path: 'UsersFavorites',
          name: 'UsersFavorites',
          component: UsersFavorites
        }
      ]
    },

    {
      path: '/admindashboard',
      component: AdminDashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'addFlashcard',
          name: 'addFlashcard',
          component: addFlashcard
        },
        {
          path: 'StartScreen',
          name: 'LearnMode',
          component: StartScreen
        },
        {
          path: 'ShowQuestion',
          name: 'ShowQuestion',
          component: ShowQuestion
        },
        {
          path: 'EditResources',
          name: 'EditResources',
          component: EditResources
        },
        {
          path: 'deleteQuestions',
          name: 'deleteQuestions',
          component: deleteQuestions
        },
        {
          path: 'addQuestionSection',
          name: 'addQuestionSection',
          component: addQuestionSection
        }
      ]
    },
    {
      path: '/addFlashcard',
      component: addFlashcard
    },
    {
      path: '/addQuestionSection',
      component: addQuestionSection
    },

    {
      path: '/login',
      component: LoginAndSignIn,
      children: [
        {
          path: '/login',
          component: LoginForm
        },
        {
          path: '/signup',
          component: SignUpForm
        }
      ]
    },

    {
      path: '/GameView/:collectionName',
      name: 'GameView',
      component: GameView
    },
    {
      path: '/GameView',
      component: GameView
    },

    {
      path: '/articles',
      component: TheArticles,
      props: (route) => ({ id: route.query.id })
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  // If the route doesnt require authentication
  if (!to.meta.requiresAuth) next()
  // If the route requires authentication
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token')

    if (!token) next('/login')
    const response = await axios.post('/token')
    const { statusCode } = response
    next()
    if (statusCode === !200) return '/login'
  }
})

export default router
