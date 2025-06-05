import { create } from "zustand";

export const useFetchStore = create((set) => ({
    posts: [],
    post: null,
    fetchData: async (id) => {
        try {
            const res = await fetch(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${id}`,
                {
                    method: "get",
                    headers: { "Content-type": "application/json" },
                 
                })
            const data = await res.json()
            set({ posts: data.todos })
            console.log(data.todos)
        } catch (err) {
            console.log(err)
        }
    }
}))


