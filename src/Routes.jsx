import { useRoutes } from "react-router-dom"
import TableContent from "./components/TableContent"
import FormUpdate from "./components/formUpdate";

const Routes = () => {
    let routes = useRoutes([
        {
            path:'/',
            element: <TableContent></TableContent>
        },
        {
            path:'/update/:id',
            element:<FormUpdate></FormUpdate>
        }
    ])

    return routes;
}

export default Routes;