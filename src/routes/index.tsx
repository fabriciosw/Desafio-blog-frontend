import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loader from '../components/Loader';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Login from '../pages/Login';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const AppRoutes: React.FunctionComponent = () => {
  const { authentication } = AuthenticationContext();

  const PrivateRoute = (children: React.ReactElement): React.ReactElement => {
    if (authentication.isAuthenticated) return <Redirect to="/login" />;

    return children;
  };

  return (
    <div className="d-flex">
      <div className="d-flex flex-column p-0 w-100">
        <main>
          <React.Suspense fallback={<Loader />}>
            <Switch>
              {/* <Route path="/login" element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />} /> */}

              <Route path="/login">
                <Login />
              </Route>

              <Route exact path="/">
                {PrivateRoute(<Home />)}
              </Route>

              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </React.Suspense>
        </main>
      </div>
    </div>
  );
};

export default AppRoutes;
