import DefaultLayout from "~/layouts/default"
import HomePage from "~/pages/home"

const publicRoutes = [
    { path: "/", component: HomePage, layout: DefaultLayout },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
