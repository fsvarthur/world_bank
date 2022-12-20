import { useLoaderData, useParams } from "react-router-dom";



const CountryDetail = (props) =>{
    const country = useLoaderData();
    const params = useParams();
    console.log(params.name);

    return (
        <div>
            <h1>{country[1][0].name}</h1>
            <p>Capital: {country[1][0].capitalCity}</p>
            <p>Region: {country[1][0].region.value}</p>
            <p>Income Level: {country[1][0].incomeLevel.value}</p>
            <p>Lending Type: {country[1][0].lendingType.value}</p>
        </div>
    );
}

export default CountryDetail;