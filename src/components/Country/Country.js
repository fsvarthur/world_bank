import React from "react";
import './Country.css';

export default function Country(props) {
    console.log(props)


    return (
        <>
            <p>City name: {props.country.name}</p>
            <p>City income level: {props.country.incomeLevel.value}</p>
            <p>City region: {props.country.region.value}</p>
            <p>City capital: {props.country.capitalCity}</p>
        </>
    );
}