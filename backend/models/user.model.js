const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');


const userSchema=new mongoose.Schema({
    fullname:
    {
        firstname:
        {
            type:String,
            required:true,
            minlength:[3,'first name must be at least 3 characters long']
        },
        lastname:
        {
            type:String,
            required:true,
            minlength:[3,'last name must be at least 3 characters long']
        }
    },
    email:
    {
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        minlength:[5,'email must be at least 5 characters long']

    },
    password:
    {
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    }
})


userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY);
   
    return token;
}

userSchema.methods.comparePassword=function(enteredPassword){
    return bcrypt.compareSync(enteredPassword,this.password);
}

userSchema.statics.hashPassword=function(password){
    return bcrypt.hashSync(password,10);    
}
const UserModel=mongoose.model('user',userSchema);

module.exports=UserModel;