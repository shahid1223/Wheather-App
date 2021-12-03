import logo from './logo.svg';
import './App.css';
import Home from './component/home'
import WheatherState from './component/context/wheatherData/wheatherState'

const App = () => {
  return (
    <>
    <WheatherState>
      <Home />
    </WheatherState>
    </>
  );
}

export default App;
