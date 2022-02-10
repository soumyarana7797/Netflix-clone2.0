import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import { Suspense } from 'react';
// import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import App from 'screens/App';

// import { store } from 'store';
import { LazyLoader } from 'shared/components';

function initApp() {
  return (
    // <Provider store={store}>
    <Suspense fallback={<LazyLoader />}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Switch>
          <Route path="*" element={<App />} />
        </Switch>
      </Router>
    </Suspense>
    // </Provider>
  );
}

export default initApp;
