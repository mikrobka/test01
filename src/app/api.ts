import axios from "axios"

import { PostType } from "@/features/pages/posts-list/posts/posts-slice"

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  withCredentials: true,
})

export const postsAPI = {
  posts(searchQuery: string = "") {
    const url = searchQuery ? `?q=${searchQuery}` : ""

    return instance.get<PostType[]>(url)
  },
  getPostById(id: number) {
    return instance.get<PostType[]>(`${id}`)
  },
}
