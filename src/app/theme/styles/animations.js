import { css } from 'styled-components';

const animations = css`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes shooting-star {
    0% {
      opacity: 1;
    }
    60%,
    100% {
      transform: rotate(-40deg) translate3d(calc(-2 * 100vw), 0, 0);
      opacity: 0.5;
      width: 0;
    }
  }

  @keyframes delay-animation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    50.01% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes trembling {
    0% {
      opacity: 1;
      transform: scale(100%);
    }
    25% {
      opacity: 0.8;
      transform: scale(80%);
    }
    50% {
      opacity: 0.6;
      transform: scale(60%);
    }
    75% {
      opacity: 0.8;
      transform: scale(80%);
    }
    100% {
      opacity: 1;
      transform: scale(100%);
    }
  }

  @keyframes sheep-walking {
    0% {
      transform: translateX(calc(100vw + 150px));
    }
    100% {
      transform: translateX(-300px);
    }
  }

  @keyframes sheep-moving-eyes {
    0% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(5px);
    }
  }

  @keyframes sheep-walk-leg-back {
    0% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(10deg) translateX(-20px);
    }
  }

  @keyframes sheep-walk-leg-front {
    0% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(-10deg) translateX(20px);
    }
  }
`;

export { animations };
