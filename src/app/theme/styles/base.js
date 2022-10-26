import { css } from 'styled-components';

const base = css`
  *,
  :before,
  :after {
    box-sizing: border-box;
  }

  html,
  body {
    background: ${({ theme: { colors } }) => colors.backgroundPrimary};
  }
`;

export { base };
