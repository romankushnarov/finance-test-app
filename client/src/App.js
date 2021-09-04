import {Header} from './components/Header/Header'
import { Routes } from './Routes';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='content'>
        <Routes />
      </div>
    </div>
  );
}

export default App;
