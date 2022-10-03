import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IAuth, Authentication } from './contexts/AuthenticationContext';
import { LoaderProvider } from './contexts/LoaderContext';
import { ToggleMenuProvider } from './contexts/ToggleMenuContext';
import Routes from './routes';
import OldSession from './utils/useOldSession';

const App: React.FunctionComponent = () => {
  const [authentication, setAuthentication] = useState<IAuth>({} as IAuth);

  useEffect(() => {
    OldSession(setAuthentication);
  }, []);

  return (
    <Router>
      <ToggleMenuProvider>
        <LoaderProvider>
          <Authentication.Provider value={{ authentication, setAuthentication }}>
            <Routes />
          </Authentication.Provider>
        </LoaderProvider>
      </ToggleMenuProvider>
    </Router>
  );
};

export default App;
