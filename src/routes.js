import landing from './pages/landing';
import dashboard from './pages/dashboard';
import links from './components/links';
import users from './components/users';
import store from './store';

console.log(store);

export default [
    {
        path: '/',
        component: landing,
        beforeEnter: (to, from, next) => {
            if (store.state.user.id) {
                next({
                    name: 'links',
                });
            } else {
                next();
            }
        },
    },
    {
        path: '/links',
        component: dashboard,
        beforeEnter: (to, from, next) => {
            if (!store.state.user.id) {
                next({
                    path: '/',
                });
            } else {
                next();
            }
        },
        children: [
            {
                path: '/',
                name: 'links',
                component: links,
            },
            {
                path: '/user',
                name: 'users',
                component: users,
            },
        ],
    },
];
