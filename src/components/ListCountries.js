import * as React from 'react';
import { useState } from 'react';



export function ListCountries(){
    const [data, setData] = useState([]);
    
    const fetchData = () =>{
        
        fetch('https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json',
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
        <>
            {data && data.length>0 && data[1].map((item) =>
                <p>{item.country.value}</p>
            )}
        </>
    );
}