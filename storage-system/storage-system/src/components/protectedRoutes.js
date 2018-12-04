module.exports = function protectRoutes() {
    var data = sessionStorage.getItem('jwtToken');
    const headers = { header: { Authorization: data } }
}