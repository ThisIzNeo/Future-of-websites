import { BuyOne } from "./components/BuyOne";
import { CanvasContainer } from "./components/CanvasContainer";
import { Details } from "./components/Details";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSec } from "./components/HeroSec";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <main className="overflow-x-hidden bg-black">
      <div className="h-screen w-full fixed top-0 z-0 hidden lg:block">
        <CanvasContainer />
      </div>
      <Header />
      <div className="absolute top-1/2   circle h-96 w-96 bg-indigo-900 bg-opacity-35 rounded-full blur-3xl"></div>
      <div className="absolute top-0  right-0 circle h-96 w-96 bg-pink-950 bg-opacity-35 rounded-full blur-3xl"></div>
      <HeroSec />
      <Details />
      <BuyOne />
      <Footer />
    </main>
  );
}

export default App;
