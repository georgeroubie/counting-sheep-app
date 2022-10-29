import { useEffect, useState } from 'react';

function useOnViewport(
  elRef,
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  },
) {
  const [isIntersecting, setIntersecting] = useState(false);

  const cb = (entries) => {
    const [entry] = entries;
    setIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cb, options);

    if (elRef?.current) {
      observer.observe(elRef.current);
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      elRef?.current && observer?.unobserve(elRef.current);
    };
  }, [elRef, options]);

  return [isIntersecting];
}

export default useOnViewport;
