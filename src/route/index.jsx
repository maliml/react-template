import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import lazyLoad from '@/components/lazyLoad/index';
import Home from '../views/home';
const Detail = lazyLoad(()=>import('../views/detail'));
function RoutesRoot() {
  return (
    <Router basename={process.env.route}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
}
export default hot(RoutesRoot);
