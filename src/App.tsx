import { Routes, Route } from "react-router-dom";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

import Home from "@/app/page";
import About from "@/app/about/page";
import Services from "@/app/services/page";
import PogisoCleaning from "@/app/pogiso-cleaning/page";
import PogisoHygiene from "@/app/pogiso-hygiene/page";
import PogisoConstruction from "@/app/pogiso-construction/page";
import PogisoSecurity from "@/app/pogiso-security/page";
import PogisoEnergy from "@/app/pogiso-energy/page";
import PogisoMarketing from "@/app/pogiso-marketing/page";
import PogisosTours from "@/app/pogisos-tours/page";
import PogisoLogistics from "@/app/pogiso-logistics/page";
import Contact from "@/app/contact/page";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pogiso-cleaning" element={<PogisoCleaning />} />
          <Route path="/pogiso-hygiene" element={<PogisoHygiene />} />
          <Route path="/pogiso-construction" element={<PogisoConstruction />} />
          <Route path="/pogiso-security" element={<PogisoSecurity />} />
          <Route path="/pogiso-energy" element={<PogisoEnergy />} />
          <Route path="/pogiso-marketing" element={<PogisoMarketing />} />
          <Route path="/pogisos-tours" element={<PogisosTours />} />
          <Route path="/pogiso-logistics" element={<PogisoLogistics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

