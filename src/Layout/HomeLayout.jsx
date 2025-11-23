import React from 'react';
import Navber from '../component/Navber';
import { Outlet } from 'react-router-dom';
import Fotter from '../component/Fotter';

const HomeLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default HomeLayout;