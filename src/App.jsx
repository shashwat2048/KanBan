import { Provider } from "react-redux"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import store from "./store/store"

function App() {

  return (
    <Provider store={store}>
      <Navbar/>
      <Dashboard/>
    </Provider>
  )
}

export default App
