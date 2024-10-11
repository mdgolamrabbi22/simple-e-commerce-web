
import { createBrowserRouter, RouterProvider,
  Route,
  Link, } from "react-router-dom"
import  routes  from "./routes/Routes"

function App() {





  return (
    <>
      <RouterProvider router={routes} />
      

    </>
  )
}

export default App

/*
step 1: create a folder in src named routes
step 2: create a file named Routes.jsx
step 3: export createbrowser router component from Routes.jsx
step 4: create a new object with path and element
*/
