import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { motion, AnimatePresence } from "framer-motion";
import BackDrop from "../Components/BackDrop/BackDrop";
import Navbar from "../Components/Layout/Navbar/Navbar";
import SideDrawer from "../Components/Layout/Navbar/Sidebar";
import Footer from "../Components/Layout/Footer/Footer";

import Welcome from "../Components/Main/Welcome/index";
import HomeContent from "../Components/Main/HomeContent/HomeContent";

export default function Home({ welcome, homeAnimation }) {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState);
  };
  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backDrop;

  if (sideDrawerOpen) {
    backDrop = <BackDrop click={backDropClickHandler} />;
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {welcome && <Welcome />}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {!welcome && (
          <motion.div
            key="nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={({ duration: 2.5 }, { delay: 0 })}
            exit={{ opacity: 0 }}
            className={styles.container}
          >
            <div className={styles.mainContent}>
              <motion.div
                key="navbar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={({ duration: 2.5 }, { delay: 0 })}
                exit={{ opacity: 0 }}
              >
                <Navbar className={styles.container} welcome={welcome} />
              </motion.div>
              <SideDrawer
                show={sideDrawerOpen}
                drawerClickHandler={drawerToggleClickHandler}
              />
              {backDrop}
              <motion.section
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={({ duration: 2 }, { delay: 1 })}
                className={styles.container}
              >
                <HomeContent />
              </motion.section>
              <motion.div
                key="footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={({ duration: 2.5 }, { delay: 1 })}
                exit={{ opacity: 0 }}
              >
                <Footer />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
