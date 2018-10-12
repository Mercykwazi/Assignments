const name = name => {
    return { type: "NAME", value: name }
}
const contactName = (name) => {
    return { type: "CONTACT_NAME", value: name }
}
const telephone = number => {
    return { type: "TELEPHONE_NUMBER", value: number }
}
const email = (email) => {
    return { type: "EMAIL_ADDRESS", value: email }
}
module.exports = {
    name,
    contactName,
    telephone,
    email
}