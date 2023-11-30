// import './style/style.css';

import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
     <div className="bg-black w-full overflow-hidden">
        <div className={`sm:px-16 px-6 flex justify-center items-center`}>
          <div className={`xl:max-w-[1280px] w-full`}>
            <Navbar />
            <Home />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default App;
