import { useState, useEffect } from 'react';
import React from 'react';
import data from './users_login_data.json';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LoginNav from './LoginNav';

const Logincomponent = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        setNameError(false)
        setPasswordError(false)
        if (name === "" || password === "") {
            if (name === "") {
                setNameError(true);
                setErrorMessage("Please enter your name");
            }
            else {
                setErrorMessage("Please enter your Password");
                setPasswordError(true);
            }
        }
        if (name !== "" && password !== "") {
            const user = data.find(u => u.username === name && u.password === password);
            if (user) {
                sessionStorage.setItem("user-info", name);
                console.log(`${name} you are logged in succesfully..`);
                setErrorMessage("");
                setIsLoggedIn(true)

            }
            else {
                setErrorMessage("Incorrect username or password");
            }
        }

    }
    useEffect(() => {
        if (isLoggedIn) {
            window.location.href = '/';

        }
        else {
            sessionStorage.clear();
            setIsLoggedIn(false);

        }
    }, [isLoggedIn, name, password]);
    return (
        <>
            <LoginNav pageName="Log In Page" />
            {isLoggedIn === false &&
                <form noValidate autoComplete='off' className="container" onSubmit={handleSubmit}>
               <div className="header">
                        <h1>LOGIN</h1>
               </div>
               <div className="inputs">
                   <div className="input">
                        <h3>User Name :</h3>
                            <div className='line'>
                        <TextField
                                    size="small"
                        className='txtfld'
                        error={nameError}
                                    onChange={(e) => setName(e.target.value)}
                        label="Email"
                                    sx={{
                                        label: "User Name",
                                        variant: "outlined"
                                    }} fullWidth required='true'
                        />
                            </div>
                    </div> 
                    <div className="input">   
                        <h3>Password :</h3>
                        <TextField 
                                size="small"
                        className='txtfld'
                        error={passwordError}
                                onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                                sx={{ variant: "outlined" }} type="password" colour="green" fullWidth required='true' />
                   </div>
               </div>
                    <div className='sub'>
                    <Button onClick={handleSubmit}  sx={{ width: '180px'}} type="submit" disableElevation variant="contained" size="medium">
                        Login
                    </Button>
                    </div>
                    <div className="error">{errorMessage}</div>
           </form>
            }
        </>
   );
}
export default Logincomponent;