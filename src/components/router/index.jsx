import Home from '../pages/home'
import Services from '../pages/services'
import Contact from '../pages/contact'
import AboutPage from '../pages/about'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

function Router() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutPage} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
}

export default Router