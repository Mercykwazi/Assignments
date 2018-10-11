export const name=(name)=>{
    return{type:"NAME",value:name}
}
export const contactName=(name)=>{
    return {type:"CONTACT-NAME",value:name}
}
export const telephone=(number)=>{
    return {type:"TELEPHONE_NUMBER",value:number}
}
export const email=(email)=>{
    return {type:"EMAIL_ADDRESS",value:email}
}