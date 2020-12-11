import { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

    if ('IntersectionObserver' in window) {
      let lazyImageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) without observer API
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove('lazy');
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to event handlers here
    }
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>Long header</header>
      <img
        class='lazy'
        src='https://res.cloudinary.com/drp9iwjqz/image/upload/e_blur:2000,f_auto,q_auto:eco/v1508291830/jeremywagner.me/using-webp-images/tacos-1x.jpg'
        data-src='https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/tacos-2x.jpg'
        data-srcset='https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/tacos-2x.jpg 2x, https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/tacos-1x.jpg 1x'
        width='385'
        height='108'
        alt='Some tacos.'
      />
      <img
        class='lazy'
        src='https://res.cloudinary.com/drp9iwjqz/image/upload/e_blur:2000,f_auto,q_auto:eco/v1508210556/jeremywagner.me/using-webp-images/modem-2x.png'
        data-src='https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/modem-2x.png'
        width='320'
        height='176'
        alt='A 56k modem.'
      />
      <img
        class='lazy'
        src='https://res.cloudinary.com/drp9iwjqz/image/upload/e_blur:2000,f_auto,q_auto:eco/v1509298941/jeremywagner.me/about/st-paul-1x.jpg'
        data-src='https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1509298941/jeremywagner.me/about/st-paul-2x.jpg'
        width='400'
        height='267'
        alt='A city skyline.'
      />
    </div>
  );
};

export default App;
