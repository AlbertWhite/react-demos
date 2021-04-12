import { useState, useEffect, useRef } from 'react';

export const useLazyLoad = () => {
  const ref = useRef(null);
  let [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const lazyLoadObserver = new IntersectionObserver(([entry]) => {
      const { isIntersecting } = entry;
      if (isIntersecting) {
        setShouldShow(true);
        lazyLoadObserver.disconnect();
      }
    });

    lazyLoadObserver.observe(ref.current);

    return () => {
      lazyLoadObserver.disconnect();
    };
  }, []);

  return [ref, shouldShow];
};
