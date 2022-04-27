import mongoose from 'mongoose'

const {Schema, model} = mongoose;

const UserSchema = new Schema({
	username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type:Date, default: new Date()},
    email: { type: String, required: true },
    telephone: { type: String},
    gender: {
         type: String, 
         enum:{ values: ["Male", "Female", "Other", "N/A"]}, default:'N/A'
        }
});

const User = model('User', UserSchema);

export default User;