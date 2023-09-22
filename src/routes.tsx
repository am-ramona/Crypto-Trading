import { Portfolio, Perpetuals, Dashboard, Docs, NotFound } from './pages';

// other
import { FC } from "react";

/*** Types & Interfaces ***/
interface Route {
    key: string,
    title: string,
    path: string,
    // enabled: boolean,
    element: FC<{}>
}
/*** End ***/

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Portfolio',
        path: '/',
        // enabled: true,
        element: Portfolio
    },
    {
        key: 'portfolio-route',
        title: 'Portfolio',
        path: '/portfolio',
        // enabled: true,
        element: Portfolio
    },
    {
        key: 'perpetuals-route',
        title: 'Perpetuals',
        path: '/perpetuals',
        // enabled: true,
        element: Perpetuals
    },
    {
        key: 'dashboard-route',
        title: 'Dashboard',
        path: '/dashboard',
        // enabled: true,
        element: Dashboard
    },
    {
        key: 'docs-route',
        title: 'Docs',
        path: '/docs',
        // enabled: true,
        element: Docs
    },
    {
        key: 'notFound-route',
        title: 'NotFound',
        path: '*',
        // enabled: true,
        element: NotFound
    }
]