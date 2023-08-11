import './App.css';
import Header from './components/Header/Header';
import AboutBlock from './components/AboutBlock/AboutBlock';
import RentBlock from './components/RentBlock/RentBlock';
import ServicesList from './components/ServicesList/ServicesList';
import InfoBlock from './components/InfoBlock/InfoBlock';
import { offer, store } from './data/data';

function App() {
  return (
    <div>
<Header/>
<InfoBlock info={store}/>
<InfoBlock info={offer}/>
<AboutBlock/>
<ServicesList/>
<RentBlock/>
    </div>
  );
}

export default App;
