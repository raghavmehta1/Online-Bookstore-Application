
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BookList } from './components/BookList';
import { BookDetails } from './components/BookDetails';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Header } from './components/Header';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/books/:id" component={BookDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
