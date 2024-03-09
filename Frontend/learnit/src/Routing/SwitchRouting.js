import AuthRoutes from "./AuthRoutes"
import AllRoutes from "./AllRoutes"
import { useState } from "react"





function SwitchRouting() {

    // const[auth, setAuth] = useState(localStorage.getItem('auth'))


    return(
        <> 
        { localStorage.getItem('auth') == 'false'  ? <AuthRoutes/> : <AllRoutes/>}

        </>
    )
}

export default SwitchRouting

