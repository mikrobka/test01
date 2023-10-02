import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom"

import App from "@/app/app"

export enum RouteNames {
  START_PAGE = "/",
  POST_ID = "/posts/:id",
}

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path={RouteNames.START_PAGE} element={<App />}>
      {/*<Route path={RouteNames.POST_ID} element={<PostPage />}></Route>,*/}
    </Route>,
  ),
)
