import React, { Component, Suspense } from 'react';
import { HashRouter as Router, withRouter, NavLink, Route } from 'react-router-dom';
import Graphics from './components/Graphics';
import Form from './components/Form';
import DragDrop from './components/DragDrop';
import Bootstrap from './components/Bootstrap';
import './styles.css';


class App extends Component {
  render() {
    return (
      <div>
        <h1 className="app_title">Nice to see you again</h1>
      <Router>
        <ul className="app_list">
          <li>
            <NavLink to="/Graphics" title="Graphics">
              Gráfico
            </NavLink>
          </li>
          <li>
            <NavLink to="/Form" title="Form">
              Formulario
            </NavLink>
          </li>
          <li>
            <NavLink to="/DragDrop" title="DragDrop">
              Drag n Drop
            </NavLink>
          </li>
          <li>
            <NavLink to="/Bootstrap" title="Bootstrap">
              Bootstrap
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={ <div>Loading...</div> }>
          <Route path="/Graphics" render={ () => <Graphics /> } />
          <Route path="/Form" render={ () => <Form /> } />
          <Route path="/DragDrop" render={ () => <DragDrop /> } />
          <Route path="/Bootstrap" render={ () => <Bootstrap /> } />
        </Suspense>
      </Router>
    </div>
    );
  }
}

export default withRouter(App);
