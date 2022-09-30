import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth, Authentication } from './contexts/AuthenticationContext';
import { ToggleMenuProvider } from './contexts/ToggleMenuContext';
import Routes from './routes';

const App: React.FunctionComponent = () => {
  const [authentication, setAuthentication] = useState<Auth>({} as Auth);

  return (
    <Router>
      <ToggleMenuProvider>
        <Authentication.Provider value={{ authentication, setAuthentication }}>
          <Routes />
        </Authentication.Provider>
      </ToggleMenuProvider>
    </Router>
  );
};

export default App;
