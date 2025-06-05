import { create } from "zustand";

export const useFetchStore = create((set) => ({
    posts: [],
    post: null,
    fetchData: async (data) => {
        try {
            const res = await fetch("http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/27",
                {
                    method: "get",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(data)
                })
            const data = await res.json()
            set({ post: data.todos })
        } catch (err) {
            console.log(err)
        }
    }
}))


