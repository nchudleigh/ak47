import landing from './pages/landing'
import dashboard from './pages/dashboard'
import links from './components/links'
import users from './components/users'

export default [{
  path: '/',
  component: landing
}, {
  path: '/links',
  name: 'dashboard',
  component: dashboard,
  children: [{
    path: '/',
    name: 'links',
    component: links
  }, {
    path: '/user',
    name: 'users',
    component: users
  }]
}]
