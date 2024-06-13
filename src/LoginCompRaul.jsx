import {useState, useEffect} from 'react';
import React from 'react';
import { RaulInput } from "@realpage/react-raul";
import data from './users_login_data.json';
import LoginNav from './LoginNav';

const LoginCompRaul= () =>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = React.useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleSubmit= (e) =>{
        e.preventDefault()
        if(name==="" || password===""){
            if(name===""){
                setErrorMessage("Please enter your name");
            }
            else{
                setErrorMessage("Please enter your Password");
            }
        }
        if(name!=="" && password!==""){
            const user=data.find(u => u.username === name && u.password === password );
            if(user){
                sessionStorage.setItem("user-info", name);
                console.log(`${name} you are logged in succesfully..`);
                setErrorMessage("");
                setIsLoggedIn(true);
                
            }
            else{
                setErrorMessage("Incorrect username or password");
            }
        }
    }
 
    useEffect(() => {
        
        if (isLoggedIn) {
            window.location.href = '/';
            
        }
        else{
            sessionStorage.clear();
            setIsLoggedIn(false);

        }
      }, [isLoggedIn]);
      
    return(
        <>
        <LoginNav pageName="Log In Page" />
        {isLoggedIn===false && 
        <div  style={{ boxShadow: '0.2px 0.2px 3px 2px rgba(0, 0, 0, 0.15)',width:'310px',height: '380px', borderRadius: '6px', }} class=" r-bg-gray-lightest r-p-6 r-max-w-md r-max-w-xl r-justify-center r-mx-auto r-my-32 ">
            
            <div >
                <form className=" " noValidate autoComplete='off' onSubmit={handleSubmit}>
                    <div className="header">
                        <div class='r-flex r-justify-center r-mb-6'>
                            <img src="https://cdn.realpage.com/images/rp-logo.svg" alt='Realpage logo'></img>
                        </div>    
                    </div>
                    
                    <div>
                        <div className="inputs">
                            <div  className="input">
                                <h3>User Name:</h3>
                                <RaulInput
                                className='r-my-2 txtfld'
                                >
                                    <input
                                    onChange= {(e) => setName(e.target.value)}
                                    type='text'
                                    placeholder='Email'
                                    />
                                </RaulInput>    
                            </div> 
                            <div  className="input r-pt-4">   
                                <h3>Password:</h3>
                                
                                <RaulInput
                                className='r-my-2 txtfld'
                                >
                                    <input
                                    onChange= {(e) => setPassword(e.target.value)}
                                    type='Password'
                                    placeholder='Password'
                                    />
                                </RaulInput>
                            </div>
                        </div>
                    </div>
                    
                    <div class="r-flex r-mb-1 r-my-3 ">
                            <button style={{backgroundColor:'#FF5F1F', color:'white', borderRadius: '4px',}} class=' r-flex-1 r-mx-12 r-m-4 r-mt-8 r-h-8'  onClick={handleSubmit}   type="submit"  >Log In</button>
                    </div>
                    <div>
                            <div style={{color:'red'}} className="r-flex r-justify-center "> {errorMessage} </div>
                    </div>
                </form>
            </div>
        </div>
        }
        </>
    );
}
export default LoginCompRaul;