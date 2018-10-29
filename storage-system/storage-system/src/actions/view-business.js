const name = (name) => {
    console.log("name",name)
    return { type: "NAME", value: name }
  };
     module.exports={name}