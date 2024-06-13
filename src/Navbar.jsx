import React from 'react'
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = ({ pageName }) => {
    const handleLogout = () => {
        if (sessionStorage.getItem('user-info')) {
            sessionStorage.clear();
            window.location.replace('/login');
        }
    };

    return (
        <div className='nav' style={{ display: 'flex', borderBottom: '4px solid #4d8ae6', alignItems: "center", boxShadow: '0.2px 0.2px 3px 2px #4d8ae6' }} >
            <div className='pagename'>
                <h1 style={{ textAlign: 'center', fontSize:'32px', marginLeft:'120px'}}>{pageName}</h1>
                        </div>
            <div className='profile'>
                <h1> {(sessionStorage.getItem('user-info'))}</h1>
                        </div>
            <div>
                <AccountCircleIcon fontSize="large" color="primary"/>
            </div>
            <div>
                <Button onClick={handleLogout} className='btn' sx={{ width: '100px', backgroundColor: "#1976d2" }} disableElevation size='large' variant="contained" type="submit" >Log Out</Button>
                        </div>
        </div>
    );

}
export default Navbar;
