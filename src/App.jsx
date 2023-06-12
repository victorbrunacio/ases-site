import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Contato, QuemSomos, Produtos, SejaRepresentante } from "./pages"
import { Footer, NavBar, ScrollToTop } from "./components"
import {whatsApp} from "./assets"
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sejarepresentante" element={<SejaRepresentante />} />
      </Routes>
      <a href="https://api.whatsapp.com/send?phone=5521996024800&text=Ol%C3%A1%20achei%20voc%C3%AAs%20atrav%C3%A9s%20do%20site%20e%20preciso%20de%20ajuda." target="_blank" className="fixed bottom-0 right-0">
       <img src={whatsApp} alt="whatsapp" className="h-14 m-5"/>
      </a>
      <Footer />
    </BrowserRouter>
  )
}

export default App
