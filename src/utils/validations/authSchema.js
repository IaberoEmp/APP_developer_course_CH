import {object,string,ref} from 'yup'

export const registerSchema = object().shape({
    email:string().required("Email is required").email("This is not a valid email"),
    password:string().required().min(8,"Password must have at least 8 charcteres"),
    confirmPassword:string().required("Password is required.").min(8,"Password must have at least 8 charcteres.").oneOf([ref("password")],"Passwords don't match.")
})