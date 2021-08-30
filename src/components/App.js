import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import HomeComponent from '../pages/Home';
import NosotrosComponent from '../pages/Nosotros';
import PortafolioComponent from '../pages/Portafolio';
import NotFoundComponent from '../pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/nosotros" component={NosotrosComponent} />
                    <Route exact path="/portafolio" component={PortafolioComponent} />
                    <Route component={NotFoundComponent} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;