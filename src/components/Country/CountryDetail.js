import { useLoaderData } from "react-router-dom";
import { getCountry } from "../../util/req";


const CountryDetail = (props) =>{
    const params = useLoaderData();
    console.log(params.id);

    return (
        <div>
            <h1>Country Detail</h1>
            <h2>{params.name}</h2>
        </div>
    )
}

export default CountryDetail;

export function countryDetailLoader({params}){
    const countryId = params.id;
    return getCountry(countryId);
}