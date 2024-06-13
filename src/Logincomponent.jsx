import {useState} from 'react';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const Logincomponent= () =>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const handleSubmit= (e) =>{
        e.preventDefault()
        setNameError(false)
        setPasswordError(false)
        if(name==="" || password===""){
            if(name===""){
                setNameError(true)
                setErrorMessage("Please enter your name");
            }
            else{
                setPasswordError(true)
                setErrorMessage("Please enter your Password");
            }
        }
        if(name!=="" && password!==""){
            if(name==="Riyaz" && password==="Riyaz"){
                console.log(`${name} you are logged in succesfully..`);
                setErrorMessage("");
                window.location.href = 'https://www.realpage.com/';
            }
            else{
                setErrorMessage("Incorrect username or password");
                setNameError(true)
                setPasswordError(true)
            }
        }
    }
   return(
           <form noValidate autoComplete='off'  className="container" onSubmit={handleSubmit}>
               <div className="header">
               <div className="triangle-container">
                    <div className="circle circle-top"></div>
                    <div className="circle circle-left"></div>
                    <div className="circle circle-right"></div>
                </div>    
               <h1>REALPAGE</h1>
               </div>
               <div className="inputs">
                   <div className="input">
                        <h3>User Name :</h3>
                        <TextField
                        className='txtfld'
                        error={nameError}
                        onChange= {(e) => setName(e.target.value)}
                        label="Email"
                        sx={{label:"User Name",
                        variant:"outlined" }} fullWidth required='true'
                        />
                    </div> 
                    <div className="input">   
                        <h3>Password :</h3>
                        <TextField 
                        className='txtfld'
                        error={passwordError}
                        onChange={(e)=> setPassword(e.target.value)}
                        label="Password"
                        sx={{variant:"outlined" }} type="password" colour="green" fullWidth required='true'/>
                   </div>
               </div>
               <Button  onClick={handleSubmit} className='btn' sx={{width:'200px', backgroundColor:"#FF5F1F"}} disableElevation size='large' variant="contained"  type="submit" >Log In</Button>
               {errorMessage && <div className="error"> {errorMessage} </div>}
           </form>
   );
}
export default Logincomponent;