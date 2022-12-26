import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import CountryDetail, { countryDetailLoader } from './components/CountryDetail/CountryDetail';
import ListCountries, {listCountriesLoader} from './components/ListCountries/ListCountries';
import ErrorPage from './errors/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>
  },{
    path: '/countries',
    element: <ListCountries/>,
    loader: listCountriesLoader,
    errorElement: <ErrorPage/>
  },
  {
    path: '/countries/:id',
    element: <CountryDetail/>,
    loader: countryDetailLoader,
    errorElement: <ErrorPage/>
  }
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
