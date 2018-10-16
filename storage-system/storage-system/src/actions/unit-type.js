const name = (name) => {
  return { type: "NAME", value: name }
};

const length = (length) => {
    return { type: "LENGTH", value: length }
};

const width = (width) => {
    return { type: "WIDTH", value: width }
};

const height = (height) => {
    return { type: "HEIGHT", value: height }
};
const storageType = (type) => {
    return { type: "STORAGE_NAME", value: type }
};
module.exports = { name, length, width, height, storageType }