import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <div className='mainDiv'>
                <p>
                    This is a website that uses the World Bank backend.
                </p>
            </div>
            <Outlet/>
        </div>
    );
}