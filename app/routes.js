import AppRoot from './app-root';
import Home from './src/components/home';
import PageOne from './src/components/page-one';

const routes = [
    { component: AppRoot,
        routes: [
            { path: '/',
                exact: true,
                component: Home
            },
            { path: '/home',
                component: Home
            },
            { path: '/page-one',
                component: PageOne
            }
        ]
    }
];

export default routes;
