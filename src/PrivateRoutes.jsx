import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes= () => {
    let auth={'token':false}
    if(sessionStorage.getItem('user-info')){
        auth={'token':true}
    }
    return(
        auth.token ? <Outlet /> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes