import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'

import "./App.css"

export default function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
      </div>
    </>
  )
}
