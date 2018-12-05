
import { Redirect } from 'react-router';

export function checkUserStatus() {
    console.log('this is still working')
    var data = sessionStorage.getItem('jwtToken');
    if(!data||data === ""){
        console.log('this is true')
     return   <Redirect to='/sign-up' />
    }
}