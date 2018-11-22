
const selectedUnits = (name) => {
    return { type: "SELECT_UNIT", value: name }
}
const selectLocation = (newLocation) => {
    console.log('am I called')
    return { type: "SELECT_LOCATION", value: newLocation }
}

module.exports = { selectedUnits,selectLocation}