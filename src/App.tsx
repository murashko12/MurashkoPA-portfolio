import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import { useLanguage } from "./contexts/LanguageContext"

function App() {
    const { language } = useLanguage()
    return (
        <div className="min-h-screen">
            <NavBar/>
            <Home/>
            <About key={language} />
            <Portfolio/>
            <Skills/>
            <Contact/>
        </div>
    )
}

export default App
