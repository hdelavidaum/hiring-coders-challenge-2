import { Route, Switch } from "react-router-dom";

// PAGES
import { HomePage, ProductsPage } from '../pages'


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
                {"Users"}
            </Route>
        </Switch>
    )
}

export default Router;