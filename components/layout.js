import Navbar from './navbar'
import Footer from './footer'

export default function Layout(props) {
  return (
    <div className="flex flex-col bg-black">
      <Navbar />

      <main style={{ position:"relative", background:"url(./background.png) no-repeat center center fixed", backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"100vh"}}>{props.children}</main>

      <Footer />
    </div>
  )
}
