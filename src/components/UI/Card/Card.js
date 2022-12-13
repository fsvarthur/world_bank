import React from 'react';
import './Card.css';

export function Card(props){    
    return (
        <div>
            <li>
                <p>Name: {props.item.name}</p>
                <p>Region: {props.item.region.value}</p>
                <p>Type of Income: {props.item.incomeLevel.value}</p>
            </li>
        </div>
    );
}