
const firstAddress = (name) => {
    return { type: "ADDRESS1", value: name }
}
const secoundAddress = text => {
 return { type: "ADDRESS2", value: text }
}
const blockName=block=>{
    return{type:"BLOCK_NAME",value:block}
}

module.exports = {
    firstAddress,
    secoundAddress,
    blockName
}