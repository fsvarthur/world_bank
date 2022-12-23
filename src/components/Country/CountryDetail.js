import { useLoaderData } from "react-router-dom";
import { getCountry } from "../../util/req";


const CountryDetail = (props) =>{
    const {params} = useLoaderData();
    console.log(params);

    return (
        <div>
            <h1>Country Detail</h1>
            <h2>{params.id}</h2>
        </div>
    )
}

export default CountryDetail;

export function countryDetailLoader({params}){
    const countryId = params.id;
    return getCountry(countryId);
}