import { useEffect } from "react";
import {observer} from "mobx-react-lite";
import AuthStore from "../../store/AuthStore.js";
import { Outlet, useNavigate } from "react-router-dom";
const PrivateRoute = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!AuthStore.isAuth) navigate('/login');
    }, [AuthStore.isAuth]);

    return(
        <Outlet />
    );
}
export default observer(PrivateRoute);