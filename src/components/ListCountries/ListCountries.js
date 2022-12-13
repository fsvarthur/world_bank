import * as React from 'react';
import { useState } from 'react';
import './ListCountries.css';
import { Card } from '../UI/Card/Card';
import { Button } from '@mui/material';


export default function ListCountries(){
    const [data, setData] = useState([]);
    
    const fetchData = () => {
            fetch("http://api.worldbank.org/v2/country?format=json&page=1",
            {
                method: 'GET',
                headers:{
                    //'Content-Type':'Application/json',
                    'Accept':'Application/json',
                    //'Access-Control-Allow-Origin':'http://localhost:3000'
                },
                mode: 'cors',
                cache: 'default'
            }).then(function(response){
                if(!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }
                console.log(response)
                return response.json();
            }).then(function(js){
                console.log(js)
                setData(js);
            });
    }
    React.useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className='container'>
            {data && data.length>0 && data[1].map((item) =>
                <div key={item.id} className='card'>
                    <Card item={item}/>
                    <Button variant="contained">{item.name}</Button>
                {/*
                    <p>Name: {item.name}</p>
                    <p>Region: {item.region.value}</p>
                    <p>Type of Income: {item.incomeLevel.value}</p>
                */}
                </div>
            )}
        </div>
    );
}