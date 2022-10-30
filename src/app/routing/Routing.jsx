import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import RoutingLoader from './Loader';

// Lazy load pages
const About = lazy(() => import('../pages/about'));
const NotFound = lazy(() => import('../pages/not-found'));
const CompleteDonation = lazy(() => import('../pages/donation/Complete'));
const CancelDonation = lazy(() => import('../pages/donation/Cancel'));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/about"
        element={
          <RoutingLoader>
            <About />
          </RoutingLoader>
        }
      />
      <Route
        path="/complete-donation"
        element={
          <RoutingLoader>
            <CompleteDonation />
          </RoutingLoader>
        }
      />
      <Route
        path="/cancel-donation"
        element={
          <RoutingLoader>
            <CancelDonation />
          </RoutingLoader>
        }
      />
      <Route
        path="*"
        element={
          <RoutingLoader>
            <NotFound />
          </RoutingLoader>
        }
      />
    </Routes>
  );
};

export default Routing;
