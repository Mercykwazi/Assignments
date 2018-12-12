const authorizeBusiness = () => {
    return { type: "BUSINESS_AUTHENTICATED", value: true }
}
// const errors = err => {
//  return { type: "BUSINESS_AUTHENTICATION_ERROR", value: err }
// }

module.exports = {
    authorizeBusiness,
  //  errors,
}