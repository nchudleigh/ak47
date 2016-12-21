import landing from './pages/landing';
import dashboard from './pages/dashboard';
import links from './components/links';
import users from './components/users';
import state from './js/state';

export default [{
    path: '/',
    component: landing,
    beforeEnter: (to, from, next) => {
        if (state.get('user').id) {
            next({
                name: 'links',
            });
        } else {
            next();
        }
    },
}, {
    path: '/links',
    name: 'dashboard',
    component: dashboard,
    beforeEnter: (to, from, next) => {
        if (!state.get('user').id) {
            next({
                path: '/',
            });
        } else {
            next();
        }
    },
    children: [{
        path: '/',
        name: 'links',
        component: links,
    }, {
        path: '/user',
        name: 'users',
        component: users,
    }],
}];
