export const errorHandler = (statuscode,message)=>{
   //this is an error handle function to handle error such as password too short
    const error = new Error(); //here we are using error constructor to great erro
    error.statuscode = statuscode;//here we initialize error statuscode to the statuscode in parameter
    error.message = message;//error message to the message in parametor
    return error; // here we return the error
}
//how to used this error handle is to import into 
//controller folder and used it over there to handle to handle error this done using next()
//where to need to used  errorHandle fucntion and that has to parameter statuscode and messages