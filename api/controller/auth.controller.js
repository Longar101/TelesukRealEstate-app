 //import user model here to the controller section 
import UserModel from "../module/user.model.js";
//am gonna used bcript js to hash the password for encription purpose
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";



 export const signup = async(req,res,next)=>{
     //console.log(req.body);
     
      const {name,age,email,password}= req.body;//destructure the object of our data that we are geting from request.body
       const hashpassword = bcrypt.hashSync(password,10)// here we have used variable called hash password to hash our password
      const createUser = new UserModel({name,age,email,password:hashpassword}); // we are creating a new object of user in our model key{use of our model}
    
      try      {
           await createUser.save(); // we user asynchronious js to save our userModel data in our database by using .save()
            res.status(201).send({message:"user created successfully"});
    
        
               } 
      catch (error) {
         //  next(errorHandler(550,"error please insert field to login "));
        //console.log(error);
       // res.status(501).send({message:"there is an error creating the user"})
       // res.status(501).json(error.message)
       next(error) //this error from middleware in our index.js file
   

        
        
      }
     };


     export const signin = async (req,res,next)=>{

         //here we gonna use email
         const {email,password} = req.body;
          
         try {
           //first checked if the email exist 
           const validUser = await UserModel.findOne({email});
           if (!validUser)  return next(errorHandler(404,"user not found !"));//checked for valid user
           //checked for password
           const validpassword = bcrypt.compareSync(password,validUser.password);

           if (!validpassword) return next(errorHandler(401,"wrong credentials"));
             //let used token to initialize and authenticate the user
             const{password:pass,...restDataInfo} = validUser._doc;
             const token = jwt.sign({id: validUser._id},process.env.JWT_SECRETKEY); 
             //let used cookie session here
             res.cookie("access_token",token,{httpOnly:true}).status(200).json(restDataInfo) 
             
          

         } catch (error) {
          next(error)
          
         }


     }