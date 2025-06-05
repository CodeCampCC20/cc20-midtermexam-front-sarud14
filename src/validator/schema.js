import * as yup from "yup"

export const schema = yup.object({
    username: yup.string().max(10).required("Please put your username"),
    password: yup.string().max(10).required("Please put your passwprd"),
    task: yup.string().max(30).required("Please put new task")
})