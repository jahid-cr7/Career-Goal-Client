import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div >
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;