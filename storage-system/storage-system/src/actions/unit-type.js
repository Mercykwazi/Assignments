const name = (name) => {
    console.log();

    return { type: "NAME", value: name }
};

const length = (length) => {
    return { type: "LENGTH", value: length }
};

const width = (width) => {
    return { type: "WIDTH", value: width }
};

const height = (height)=> {
    return { type: "HEIGHT", value: height }
};
module.exports = { name, length, width, height }