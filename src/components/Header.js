import React from 'react';
import './UI/Header/Header.css'

export default function Header(){
    return (
        <>
            <Head/>
        </>
    );
}

function Head(){
    return (
        <header className='main-header'>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/countries">Countries</a></li>
                </ul>
            </nav>
        </header>
    );
}