import HomePage from "containers/HomeTemplate/HomePage";
import ListEventPage from "containers/HomeTemplate/ListEventPage";
import DetailEventPage from "containers/HomeTemplate/DetailEventPage";

const routesHome = [
    {
        exact: true,
        path: "/",
        component: HomePage,
    },
    {
        exact: false,
        path: "/list-event",
        component: ListEventPage,
    },
    {
        exact: false,
        path: "/detail-event/:id",
        component: DetailEventPage,
    },
];

export { routesHome };