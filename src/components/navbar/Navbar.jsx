import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/">
            <img className="logo" src="/clint.png" alt="Clint Dev" />
          </a>
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/clint.devs" target="blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/johnclinton-luseno-737531164/"
            target="blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/clintmadeit" target="blank">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@clintmadeit" target="blank">
            <img src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
