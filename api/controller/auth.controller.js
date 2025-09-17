 //import user model here to the controller section 
import User from "../module/user.model.js";
//am gonna used bcript js to hash the password for encription purpose
import bcrypt from "bcryptjs";



 export const signup = async(req,res)=>{
     //console.log(req.body);
     
      const {name,age,email,password}= req.body;//destructure the object of our data that we are geting from request.body
       const hashpassword = bcrypt.hashSync(password,10)// here we have used variable called hash password to hash our password
      const newUser = new User({name,age,email,password:hashpassword}); // we are creating a new object of user in our model key{use of our model}
    
      try      {
           await newUser.save(); // we user asynchronious js to save our userModel data in our database by using .save()
            res.status(201).send({message:"user created successfully"});
    
        
               } 
      catch (error) {
        console.log(error);
        res.status(501).send({message:"there is an error creating the user"})
       // res.status(501).json(error.message)
        
        
      }
     
    
 }