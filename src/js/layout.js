import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home1 } from "./views/home1";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar1 } from "./component/navbar1";
import { Footer } from "./component/footer";
import { CharactersDetail } from "./views/learnmoreCharacter";
import { PlanetsDetail } from "./views/learnmorePlanet";
///////////////////////////////////////////////////////////////
import { Home } from "./views/home";
import { Contacts } from "./views/contacts";
import { Newcontact } from "./views/newcontact";

//create your first component
const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar1 />
          <Routes>
            ///////////////////////////////////////////////////////////////
            <Route path="/" element={<Home />} />
            <Route path="/newcontact" element={<Newcontact />} />
            <Route path="/contacts" element={<Contacts />} />
            ///////////////////////////////////////////////////////////////
            <Route path="/home1" element={<Home1 />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route
              path="/CharactersDetail/:character_uid"
              element={<CharactersDetail />}
            />
            <Route
              path="/PlanetsDetail/:planet_uid"
              element={<PlanetsDetail />}
            />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
