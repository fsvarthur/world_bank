import { useParams } from "react-router-dom";



const CountryDetail = (props) =>{
    const params = useParams();
    console.log(params.id);

    return (
        <div>
            <h1>Country Detail</h1>
            <h2>{params.name}</h2>
        </div>
    )
}

export default CountryDetail;