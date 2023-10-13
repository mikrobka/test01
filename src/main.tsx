import "@/styles/index.scss"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/700.css"

import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"

import { router } from "@/app/routes"
import { store } from "@/app/store"
import { VoteProvider } from "@/components/vote/vote-context"

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <VoteProvider>
      <HashRouter>{router}</HashRouter>
    </VoteProvider>
  </Provider>,
)
