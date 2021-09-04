import { Switch, Route } from "react-router-dom"
import { About } from "./pages/About/About"
import { Home } from "./pages/Home/Home"

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
        </Switch>
    )
}