import { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { randomNumber } from '../../helpers/generators';
import { setAnimation } from '../../theme/styles/helpers';

function animationShootingStar(delay) {
  return setAnimation(
    `3s cubic-bezier(0.33, 0.19, 0.26, 1.3) 0s infinite shooting-star, delay-animation ${delay} linear infinite`,
  );
}

const Star = styled.span`
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  background-color: ${({ $isDark }) => ($isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.6)')};

  ${({ $trembling }) =>
    $trembling &&
    $trembling < 20 &&
    css`
      ${setAnimation(`${$trembling}s linear 0s infinite trembling`)}
    `};

  ${({ $size }) =>
    $size === 'small' &&
    css`
      width: 1px;
      height: 1px;
    `};

  ${({ $size }) =>
    $size === 'normal' &&
    css`
      width: 2px;
      height: 2px;
    `};

  ${({ $size }) =>
    $size === 'large' &&
    css`
      width: 3px;
      height: 3px;
    `};

  ${({ $isShootingStar }) =>
    $isShootingStar &&
    css`
      opacity: 0;
      width: 100px;
      border-radius: 5px;
      transform: rotate(-45deg) translate3d(0, 0, 0);
      will-change: transform, width, opacity;
    `};

  ${({ $shootingStarDelay }) =>
    $shootingStarDelay === 1 &&
    css`
      ${animationShootingStar('50s')}
    `};

  ${({ $shootingStarDelay }) =>
    $shootingStarDelay === 2 &&
    css`
      ${animationShootingStar('100s')}
    `};

  ${({ $shootingStarDelay }) =>
    $shootingStarDelay === 3 &&
    css`
      ${animationShootingStar('150s')}
    `};

  ${({ $shootingStarDelay }) =>
    $shootingStarDelay === 4 &&
    css`
      ${animationShootingStar('200s')}
    `};

  ${({ $shootingStarDelay }) =>
    $shootingStarDelay === 4 &&
    css`
      ${animationShootingStar('250s')}
    `};
`;

const Stars = () => {
  const [stars, setStars] = useState([]);

  const generateStars = useCallback(() => {
    const starsData = [];
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const minimumStars = parseInt(windowWidth / 3 + windowHeight / 5);
    const maximumStars = parseInt(windowWidth / 2 + windowHeight / 4);
    const totalStars = randomNumber(minimumStars, maximumStars);
    for (let i = 0; i < totalStars; i++) {
      const top = randomNumber(0, windowHeight);
      const left = randomNumber(0, windowWidth);
      const size = randomStarSize();
      const isDark = randomDarkStar();
      const shootingStarDelay = randomShootingStarDelay(parseInt((totalStars * 95) / 100));
      const trembling = shootingStarDelay ? undefined : randomStarTrembling();
      starsData.push({
        top,
        left,
        size,
        trembling,
        isDark,
        isShootingStar: Boolean(shootingStarDelay),
        shootingStarDelay,
      });
    }
    setStars(starsData);
  }, []);

  useEffect(() => {
    generateStars();
  }, [generateStars]);

  useEffect(() => {
    let timeout = null;
    function resizeListener() {
      clearTimeout(timeout);
      timeout = setTimeout(() => generateStars(), 1000);
    }

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [generateStars]);

  function randomStarTrembling() {
    const tremblingIndicator = randomNumber(1, 40);
    return tremblingIndicator;
  }

  function randomStarSize() {
    const sizeIndicator = randomNumber(1, 3);
    if (sizeIndicator === 1) {
      return 'small';
    }

    if (sizeIndicator === 2) {
      return 'normal';
    }

    if (sizeIndicator === 3) {
      return 'large';
    }
  }

  function randomDarkStar() {
    const brightnessIndicator = randomNumber(1, 2);
    if (brightnessIndicator === 1) {
      return true;
    }

    if (brightnessIndicator === 2) {
      return false;
    }
  }

  function randomShootingStarDelay(maxShootingStars) {
    const shootingStarIndicator = randomNumber(1, maxShootingStars);
    if (shootingStarIndicator < 6) {
      return shootingStarIndicator;
    }
    return undefined;
  }

  return (
    <>
      {stars.map((star, index) => (
        <Star
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          style={{ top: star.top, left: star.left }}
          $trembling={star.trembling}
          $size={star.size}
          $isDark={star.isDark}
          $isShootingStar={star.isShootingStar}
          $shootingStarDelay={star.shootingStarDelay}
        />
      ))}
    </>
  );
};

export default Stars;
