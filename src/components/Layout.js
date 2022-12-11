
import React from 'react';
import Navbar from './Navbar';


function Layout({ children }) {
    return (
        <div className='z-[100]'>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    );
}

export default Layout;