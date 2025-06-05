
import { create } from "zustand";

export const useNewStore = create((set) => ({ 
    todos: [],
    fetchData: async(todos) => {
        try{
            const res = await fetch("http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/27")
            const data = await res.json()
            set({todos: data.todos})
        } catch (err){
            console.log(err)
        }
    }
}))
