import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import './ListCountries.css';
import { Link } from 'react-router-dom';

/*export async function loader({ params }) {
    const response = await fetch(`https://api.worldbank.org/v2/country/${params.id}?format=json`);
    const data = await response.json();
    return data;
}*/


export default function ListCountries(){
    const [data, setData] = useState([]);
    
    const fetchData = useCallback(async () => {
            fetch("https://api.worldbank.org/v2/country?format=json&per_page=299",
            {
                method: 'GET',
                headers:{
                    'Accept':'Application/json',
                },
                mode: 'cors',
                cache: 'default'
            }).then(function(response){
                return response.json();
            }).then(function(js){
                setData(js);
            });
    },[]);    


    useEffect(()=>{
        fetchData()
    },[fetchData])

    return (
        <div >
            {data && data.length>0 && data[1].map((item) =>
                <div key={item.id} className='divButton'>
                    <Link  to={`/countries/${item.id}`}>{item.name}</Link>
                </div>
            )}
        </div>
    );
}
