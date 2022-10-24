import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './styles';
import baseTheme from './themes/base';

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Normalize />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
