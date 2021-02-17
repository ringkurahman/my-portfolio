import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/shared/Navbar"
import Hero from "../components/shared/Hero"
import Footer from "../components/shared/Footer"
import "../styles/index.scss"


const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="portfolio-app">
      <Navbar />
      {Component.name === "Home" && <Hero />}
      <div className="container mb-5" style={{ minHeight: "77vh" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}


export default MyApp
