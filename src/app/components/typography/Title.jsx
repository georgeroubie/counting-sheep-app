import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import _BackIcon from '../icons/Back';

const Wrapper = styled.h1`
  font-size: ${({ theme: { fontSize } }) => fontSize.xlarge};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.xlarge};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  margin: 0 0 ${({ theme: { spacing } }) => spacing.large};

  ${({ $hasClick }) =>
    $hasClick &&
    css`
      display: flex;
      align-items: center;
      gap: ${({ theme: { spacing } }) => spacing.normal};
      cursor: pointer;
    `}
`;

const BackIcon = styled(_BackIcon)`
  width: ${({ theme: { fontSize } }) => fontSize.large};
`;

const Title = ({ children, onBack }) => {
  return (
    <Wrapper $hasClick={!!onBack} onClick={onBack}>
      {onBack && <BackIcon />}
      {children}
    </Wrapper>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  onBack: PropTypes.func,
};

Title.defaultProps = {
  onBack: undefined,
};

export default Title;
