import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import CountryDetail, { countryDetailLoader } from './components/Country/CountryDetail';
import ListCountries, {listCountriesLoader} from './components/ListCountries/ListCountries';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },{
    path: '/countries',
    element: <ListCountries/>,
    loader: listCountriesLoader,
    children: [
      {
        path: '/countries/:id',
        element: <CountryDetail/>,
        loader: countryDetailLoader,
      }
    ]
  },
]);


function App() {

  return (
    <>
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  );
}

export default App;
