import { Route, Routes } from "react-router-dom"

import App from "@/app/app"
import { PostPage } from "@/features/pages/post-page"

export enum RouteNames {
  START_PAGE = "/",
  POST_ID = "/post/:id",
}

export const router = (
  <Routes>
    <Route path={RouteNames.START_PAGE} element={<App />} />
    <Route path={RouteNames.POST_ID} element={<PostPage />} />
  </Routes>
)
