import Search from 'pages/Search';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/NavBar';
import Main from './pages/Main';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Main />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;