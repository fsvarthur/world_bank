import React from 'react';

export default function Header(){
    return (
        <div>
            <Head/>
        </div>
    );
}

function Head(){
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/countries">Countries</a></li>
                </ul>
            </nav>
        </div>
    );
}