
const firstAddress = (name) => {
    return { type: "ADDRESS1", value: name }
}
const secoundAddress = text => {
    console.log('what',text);
    
    return { type: "ADDRESS2", value: text }
}

module.exports = {
    firstAddress,
    secoundAddress
}