import * as yup from "yup"

export const schemaTodo = yup.object({
    taskName: yup.string().max(30).required("Please put new task")
})