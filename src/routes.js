import landing from './pages/landing'
import dashboard from './pages/dashboard'
import links from './components/links'
import users from './components/users'

export default [{
  path: '/',
  component: landing
}, {
  path: '/',
  component: dashboard,
  children: [{
    path: '/links',
    component: links
  }, {
    path: '/user',
    component: users
  }]
}]
