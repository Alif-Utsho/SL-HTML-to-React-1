import Home from '../pages/home'
import Services from '../pages/services'
import Contact from '../pages/contact'
import AboutPage from '../pages/about'
import BlogPage from '../pages/blog'
import Portfolio from '../pages/portfolio'
import Single from '../pages/single'
import TeamPage from '../pages/team'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

function Router() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutPage} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/single" component={Single} />
            <Route path="/team" component={TeamPage} />

            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
}

export default Router