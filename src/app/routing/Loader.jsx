import PropTypes from 'prop-types';
import { Suspense } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Description from '../components/typography/Description';

const RoutingLoader = ({ children }) => {
  return (
    <Suspense
      fallback={
        <PageWrapper>
          <Description>Loading...</Description>
        </PageWrapper>
      }
    >
      {children}
    </Suspense>
  );
};

RoutingLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RoutingLoader;
