import * as React from 'react';
import './ListCountries.css';
import { Link } from 'react-router-dom';
import {getCountries} from '../../util/req';
import { useLoaderData } from 'react-router-dom';


export default function ListCountries(){
    const listC = useLoaderData(); 

    return (
        <div >
            {listC && listC.length>0 && listC[1].map((item) =>
                <div key={item.id} className='divButton'>
                    <Link  to={`/countries/${item.id}`}>{item.name}</Link>
                </div>
            )}
        </div>
    );
}

export function listCountriesLoader(){
    return getCountries();
}
