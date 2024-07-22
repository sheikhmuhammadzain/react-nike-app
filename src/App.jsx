import "./App.css";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-7 my-10 place-items-center">
        <Card
          src={
            "https://www.julke.pk/cdn/shop/files/Rcokford-mens-leather-slip-on-shoes-dark-brown-weaving-buckle-front-view-JULKE_256x@3x.jpg?v=1702375004"
          }
        />
        <Card
          src={
            "https://cdn09.nnnow.com/web-images/medium/styles/KTDP2DTUXKQ/1683610487559/1.jpg"
          }
        />
        <Card
          src={
            "https://upload.wikimedia.org/wikipedia/en/9/9e/Lil_Nas_X_Satan_Shoes.png"
          }
        />
        <Card
          src={
            "https://www.tnvcollection.pk/cdn/shop/products/Shoes-Men-Sneakers-Male-Trainers-Ultra-Breathable-Boosts-Casual-Shoes-Sapato-Masculino-Krasovki-Zapatillas-Deportivas-Hombre_5b93f7b5-399c-4aa1-be9e-d8ad6be90984.jpg?v=1720704746"
          }
        />
        <Card
          src={
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/63c77c04dc6448548ccbae880189e107_9366/Galaxy_6_Shoes_Black_GW3848_01_standard.jpg"
          }
        />
      </div>
      <div className='text-center'>
        <h1 className="grid place-items-center py-2 text-4xl font-extrabold lg:text-6xl">
          WINNING IS NOT FOR EVERYONE
        </h1>
        <p className='py-3 text-xl'>it for those what ever it takes</p>
        <button className='font-medium px-6 py-3 bg-black text-white rounded-3xl my-3'>Watch</button>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
