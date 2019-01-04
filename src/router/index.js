import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import MainSection from '../MainSection'
import ProjectInfo from '../components/ProjectInfo'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/world',
            name: 'HelloWorld',
            components: {
                main: HelloWorld
            }
        },
        {
            path: '/project/:id',
            name: 'ProjectInfo',
            components: {
                main: ProjectInfo
            }
        },
        {
            path: '/*',
            name: 'MainPage',
            components: {
                main: MainSection
            }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.name === 'ProjectInfo') {
            return {x: 0, y: 0}
        } else {
            if (savedPosition) {
                return savedPosition
            } else {
                return {x: 0, y: 0}
            }
        }
    }
})
