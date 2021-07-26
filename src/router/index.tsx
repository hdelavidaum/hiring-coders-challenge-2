import { Route, Switch } from "react-router-dom";

// PAGES
import { HomePage, ProductsPage, UsersPage } from '../pages'


const Router = () => {
    return(
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route path="/products">
                <ProductsPage />
            </Route>
            <Route path="/users">
                <UsersPage />
            </Route>
        </Switch>
    )
}

export default Router;