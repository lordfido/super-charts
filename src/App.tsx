import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import './styles/fonts.css';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      { routes.map(({ Component, exact, path }) => (
        <Route
          key={ path }
          component={ Component }
          exact={ exact }
          path={ path }
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
