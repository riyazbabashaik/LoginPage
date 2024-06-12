import React from 'react'
import { RaulAvatar } from "@realpage/react-raul";

const Navbar = ({pageName}) => {
    const handleLogout = () => {
        if (sessionStorage.getItem('user-info')) {
            sessionStorage.clear();
            window.location.replace('/login');
        }
    };

    return (
        <div style={{ borderBottom: '4px solid #FF5F1F', alignItems: "center",  boxShadow: '0.2px 0.2px 3px 2px #FF5F1F'}} className=" r-flex ">
                        <div className="r-flex-1 r-p-3 r-m-2 ">
                            <a href="./" className="r-icon-xl"><raul-icon icon="arrow-left-1"></raul-icon></a>
                        </div>
                        <div className="r-flex-auto  r-p-3 r-m-2 head r-justify-center r-heading-xl">
                            <h1 style={{ textAlign: 'center' }}>{pageName}</h1>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }} className=" r-flex-1  r-text-xl   r-p-3 r-m-2 details">
                            <h2 >{(sessionStorage.getItem('user-info'))} <RaulAvatar /></h2>
                            <button style={{backgroundColor:'#FF5F1F', color:'white', borderRadius: '4px', fontSize:'17px' }} className='r-ml-4 r-px-2 r-h-8 r-w-24 r-mt-1' type="submit" onClick={handleLogout} >Log Out </button>
                        </div>
        </div>
    );

}
export default Navbar;
