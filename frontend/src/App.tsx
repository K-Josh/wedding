import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Story from "./pages/Story";

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <Story />
        <div className='h-[100rem]'></div>
    </div>
  )
}

export default App
