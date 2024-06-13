import React from 'react'

const Navbar = ({pageName}) => {
    return (
        <div style={{ borderBottom: '4px solid #FF5F1F', alignItems: "center",  boxShadow: '0.2px 0.2px 3px 2px #FF5F1F'}} className=" r-flex ">
                <div>
                </div>
                <div className="r-flex-auto  r-p-6 r-m-2 head r-justify-center r-heading-xl">
                    <h1 style={{ textAlign: 'center' }} >{pageName}</h1>
                </div>
                <div>
                </div>
        </div>
    );

}
export default Navbar;