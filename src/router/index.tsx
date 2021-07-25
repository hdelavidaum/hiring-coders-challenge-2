import { Route, Switch } from "react-router-dom";

// PAGES
import {HomePage } from '../pages'


const Router = () => {
    return(
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/products">
                    {"Products"}
                </Route>
                <Route path="/users">
                    {"Users"}
                </Route>
            </Switch>
        </>
    )
}

export default Router;