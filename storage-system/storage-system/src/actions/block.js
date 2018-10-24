const blockName = (name) => {
    console.log("am I called")
    return { type: "Block_Name", value: name }
}

module.exports = { blockName }