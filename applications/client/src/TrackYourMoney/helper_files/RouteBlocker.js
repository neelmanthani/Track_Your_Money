import { useNavigate } from 'react-router-dom'
//returns true if logged in if false redirect to login
function RouteBlocker() {
    const navigate = useNavigate();
    fetch("https://csc.csc648team06.com/api/user/Get_Session_Data")
    //  fetch('/api/user/Get_Session_Data')
        .then(
            response => response.json()
        ).then(
            data => {
                // console.log(data.active)
                if (data.active === true) {
                    return true;
                } else {
                    navigate('/login')

                    return false;
                }
            }
        )
        .catch(console.log)
    return false;

}

//returns true if logged in and redirects to tymhome
function LoginRouteBlocker() {
    const navigate = useNavigate();
    fetch("https://csc.csc648team06.com/api/user/Get_Session_Data")
    // fetch('/api/user/Get_Session_Data')
        .then(
            response => response.json()
        ).then(
            data => {
                // console.log(data.active)
                if (data.active === true) {
                    navigate('/tymHome')
                    return true;
                } else {
                    return false;
                }
            }
        )
        .catch(console.log)
}

export { RouteBlocker, LoginRouteBlocker };