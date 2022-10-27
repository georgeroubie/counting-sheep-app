import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: ${({ theme: { spacing } }) => `${spacing.xlarge} ${spacing.large} ${spacing.xlarge} ${spacing.large}`};
  height: 100vh;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;

const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
