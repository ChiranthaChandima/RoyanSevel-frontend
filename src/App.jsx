import Homepage from "./Routes/homepage/homepage"
import Navbar from "./components/navbar"
import "./layout.scss"

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar/>
        </div>
        <div className="content">
          <Homepage/>
        </div>
    </div>
  )
}

export default App