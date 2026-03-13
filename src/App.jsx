import { useEffect, useState } from "react"
import { Navbar, Hero, Programs, About, Campus, Testimonials, Contact, Footer, VideoPlayer } from "./Components/Index"
import { ThemeProvider } from "./Contexts/Theme"

function App() {
  const [playState, setPlayState] = useState(false)

  // Theme mode (dark or light)
  const [themeMode, setThemeMode] = useState('dark')
  const lightMode = () => {
    setThemeMode('light')
  }
  const darkMode = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    let htmlClassList = document.querySelector('html').classList
    htmlClassList.remove('dark', 'light')
    htmlClassList.add(themeMode)
  }, [themeMode])


  return (
    <>
      <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
        <Navbar />
        <Hero />
        <Programs />
        <About setPlayState={setPlayState} />
        <Campus />
        <Testimonials />
        <Contact />
        <Footer />
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </ThemeProvider>
    </>
  )
}

export default App
