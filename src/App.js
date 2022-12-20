import './App.css';
import Header from './components/Header';
import ListCountries from './components/ListCountries/ListCountries';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import CountryDetail from './components/Country/CountryDetail';

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/countries' element={<ListCountries/>} loader="countryLoader" errorElement="error-page" />
          <Route path='/countries/:id' element={<CountryDetail/>} />     
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
