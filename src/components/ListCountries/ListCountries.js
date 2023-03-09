import * as React from 'react';
import './ListCountries.css';
import { Link } from 'react-router-dom';
import {getCountries} from '../../util/req';
import { useLoaderData } from 'react-router-dom';

export default function ListCountries(){
    const listC = useLoaderData(); 

    return (
        <div className='main'>
            {listC && listC.length>0 && listC[1].map((item) =>
            <div key={item.id} className='content'>
                <Link  to={`/countries/${item.id}`} key={item.id}>{item.name}</Link>
            </div>)}
        </div>
    );
}

export function listCountriesLoader(context){
    return getCountries(context);
}
