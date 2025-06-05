import * as yup from "yup"

export const schema = yup.object({
    username: yup.string().max(20).required("Please put your username"),
    password: yup.string().max(10).required("Please put your passwprd"),
    
})