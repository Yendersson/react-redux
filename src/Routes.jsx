import { useRoutes } from "react-router-dom"
import TableContent from "./components/TableContent"
import FormUpdate from "./components/formUpdate";
import NotFound from "./components/pure/NotFound";
import AuditLog from "./components/AuditLog";
import Auth from "./components/auth/Auth";

const Routes = () => {
    let routes = useRoutes([
        {
            path:'/auth',
            element: <Auth></Auth>
        },
        {
            path:'/',
            element: <TableContent></TableContent>
        },
        {
            path:'/update/:id',
            element:<FormUpdate></FormUpdate>
        },
        {
            path:'/logs',
            element:<AuditLog></AuditLog>
        },
        {
            path:'*',
            element:<NotFound></NotFound>
        },

    ])

    return routes;
}

export default Routes;