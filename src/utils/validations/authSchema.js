import {object,string,ref} from 'yup'

export const registerSchema = object().shape({
    confirmPassword:string().required("Password is required.").min(8,"Password must have at least 8 charcteres.").oneOf([ref("password")],"Passwords don't match."),
    password:string().required().min(8,"Password must have at least 8 charcteres"),
    email:string().required("Email is required").email("This is not a valid email")
})

export const loginSchema = object().shape({
    password:string().required(),
    email:string().required("Email is required").email("This is not a valid email")
})
