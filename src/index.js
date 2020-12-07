import React from 'react';
import ReactDOM from 'react-dom';

import { Route,BrowserRouter as Router } from 'react-router-dom';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProductsPage from './pages/products';
import ShoppingPage from './pages/report/shopping';


const routing = (
    <Router>
    <div>
    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossorigin="anonymous"/>

        <button style={{width:"33.3%", height:"100px"}} class="bt1">
          <a href="/" style={{color:'black'}}>SALE</a>
          </button>
          <button style={{width:"33.3%", height:"100px"}} class="bt1">
          <a href="/products" style={{color:'black'}}>PRODUCTS</a>
          </button>
          <button style={{width:"33.3%", height:"100px"}} class="bt1">
          <a href="/shopping" style={{color:'black'}}>OUT OF STOCK LIST</a>
          </button>
        
          
        <Route exact path="/" component={App} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/shopping" component={ShoppingPage} />
      </div>
    </Router>
  )
  


ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
