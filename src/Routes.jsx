import { useRoutes } from "react-router-dom"
import TableContent from "./components/TableContent"
import FormUpdate from "./components/formUpdate";
import NotFound from "./components/pure/NotFound";

const Routes = () => {
    let routes = useRoutes([
        {
            path:'/',
            element: <TableContent></TableContent>
        },
        {
            path:'/update/:id',
            element:<FormUpdate></FormUpdate>
        },
        {
            path:'*',
            element:<NotFound></NotFound>
        }

    ])

    return routes;
}

export default Routes;