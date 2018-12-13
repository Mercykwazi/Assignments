import axios from 'axios';
export function protectRoutes() {
    var data = sessionStorage.getItem('jwtToken');
    const headers = axios.defaults.headers.common['Authorization'] = data;
    console.log('headers')
    return headers
}