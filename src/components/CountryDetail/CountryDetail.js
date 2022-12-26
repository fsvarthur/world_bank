
import { useLoaderData } from "react-router-dom";
import { getCountry } from "../../util/req";
import Country from "../Country/Country";


export default function CountryDetail () {
    const countryData = useLoaderData();

    return (
        <div className="countryDetail">
            <h1>Country Detail</h1>
            {countryData[1].map((country) => <Country key={country.id} country={country}/>)}
        </div>
    )
}


export function countryDetailLoader({params}){
    const countryId = params.id;
    return getCountry(countryId);
}