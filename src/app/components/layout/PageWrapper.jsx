import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: ${({ theme: { spacing } }) => spacing.xlarge} auto;
  padding: ${({ theme: { spacing, sizes } }) => `0 ${spacing.large} ${sizes.grassHeight} ${spacing.large}`};
  overflow-y: auto;
`;

const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
