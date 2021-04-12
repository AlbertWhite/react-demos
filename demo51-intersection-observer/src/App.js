import { useLazyLoad } from './useLazyLoad';
import './App.css';

const App = () => {
  const [ref, shouldShow] = useLazyLoad();

  return (
    <div className='app' ref={ref}>
      {!shouldShow && <div>placeholder</div>}
      {shouldShow && <div ref={ref}>I am a huge div</div>}
    </div>
  );
};

export default App;
