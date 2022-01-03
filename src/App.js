import React, { useEffect, useState } from "react";

import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import Layout from "./Components/Layout/index";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Theatre from "./pages/Theatre";
import { AnimatePresence } from "framer-motion";
import BookPage from "./pages/Library/BookPage";
import About from "./pages/About";
import HelpUs from "./pages/HelpUs";

function App() {
  const animatationEnded = useSelector((state) => state.startAnimation.ended);

  const [welcome, setWelcome] = useState(false);

  useEffect(() => {
    const userFirstVisit = sessionStorage.getItem("Has_visited");
    if (animatationEnded === true) {
      setWelcome(false);
    }
    if (userFirstVisit !== "True") {
      setWelcome(true);
      sessionStorage.setItem("Has_visited", "True");
    }
  }, [animatationEnded]);
  const loacation = useLocation();
  console.log(window.innerWidth);
  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      <Routes location={loacation} key={loacation.pathname}>
        <Route
          path="/"
          element={<Home welcome={window.innerWidth > 768 ? welcome : false} />}
        />
        <Route path="/" element={<Layout />}>
          <Route path="/library" element={<Library />} />
          <Route path="/library/:bookName" element={<BookPage />} />
          <Route path="/Theatre" element={<Theatre />} />
          <Route path="/about" element={<About />} />
          <Route path="/donation" element={<HelpUs />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
        <Route path="/" element={<Navigate replace to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
