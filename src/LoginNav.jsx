import React from 'react'

const Navbar = ({pageName}) => {
    return (
        <div style={{height:'80px', borderBottom: '4px solid #4d8ae6', alignItems: "center",  boxShadow: '0.2px 0.2px 3px 2px #4d8ae6'}} >
                <div>
                </div>
                <div className='logheader' >
                    <h1 style={{ textAlign: 'center', fontSize:'32px' }} >{pageName}</h1>
                </div>
        </div>
    );

}
export default Navbar;