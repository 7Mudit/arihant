import React, { useState , useEffect } from "react";
import "./MainSection.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Category from "./Category";
import Products from "./Products";
import Candle1 from "../images/candle1.webp";
import Candle2 from "../images/candle2.webp";
import Candle3 from "../images/candle3.webp";
import Candle4 from "../images/candle4.webp";
import Candle5 from "../images/candle5.webp";
import Candle6 from "../images/candle6.webp";

const variants = {
  open: { opacity: 1, scaleY: 1 },
  closed: { opacity: 0, scaleY: 0 },
};

const categories = [
  {
    name: "Candles",
    id: 1,
    img_link:
      "https://www.artisanlab.in/cdn/shop/products/0F1A0297a_720x.jpg?v=1611993848",
  },
  {
    name: "Diffusers & oils ",
    id: 2,
    img_link:
      "https://www.artisanlab.in/cdn/shop/products/0F1A0297a_720x.jpg?v=1611993848",
  },
  {
    name: "room Spray",
    id: 3,
    img_link:
      "https://www.artisanlab.in/cdn/shop/products/0F1A0297a_720x.jpg?v=1611993848",
  },
  {
    name: "Candle Holders",
    id: 4,
    img_link:
      "https://www.artisanlab.in/cdn/shop/products/0F1A0297a_720x.jpg?v=1611993848",
  },
];

const products = [
  {
    name: "Jasper Candle",
    prize: "1,990.00",
    img: Candle1,
  },
  {
    name: "Crystal Quartz Candle",
    prize: "1,990.00",
    img: Candle2,
  },
  {
    name: "Ross Quartz Candle",
    prize: "1,990.00",
    img: Candle3,
  },
  {
    name: "Jasper Diffuser Oil",
    prize: "1,590.00",
    img: Candle4,
  },
  {
    name: "Lapiz Lazuli Candle",
    prize: "1,990.00",
    img: Candle5,
  },
  {
    name: "Aventuri Candle",
    prize: "1,990.00",
    img: Candle6,
  },
  {
    name: "Jasper Diffuser Oil",
    prize: "1,590.00",
    img: Candle4,
  },
  {
    name: "Lapiz Lazuli Candle",
    prize: "1,990.00",
    img: Candle5,
  },
  {
    name: "Aventuri Candle",
    prize: "1,990.00",
    img: Candle6,
  },
  {
    name: "Jasper Diffuser Oil",
    prize: "1,590.00",
    img: Candle4,
  },
  {
    name: "Lapiz Lazuli Candle",
    prize: "1,990.00",
    img: Candle5,
  },
  {
    name: "Aventuri Candle",
    prize: "1,990.00",
    img: Candle6,
  },
];

const MainSection = () => {
  const [candlesVisible, setCandlesVisible] = useState(false);
  const [candles2Visible, setCandles2Visible] = useState(false);
  const [diffusersVisible, setDiffusersVisible] = useState(false);
  const [roomSpraysVisible, setRoomSpraysVisible] = useState(false);
  const [candleHoldersVisible, setCandleHoldersVisible] = useState(false);
//   window.onscroll = function() {
//     var scrollHeight = Math.max(
//         document.body.scrollHeight, document.documentElement.scrollHeight,
//         document.body.offsetHeight, document.documentElement.offsetHeight,
//         document.body.clientHeight, document.documentElement.clientHeight
//     );
//     var scrollPosition = window.pageYOffset + window.innerHeight;

//     if (scrollPosition >= scrollHeight) {
//         document.querySelector(".main_section_rightSide").style.overflowY = "scroll";
//     } else {
//         document.querySelector(".main_section_rightSide").style.overflowY = "hidden";
//     }
// };
// useEffect(() => {
//   const mainSectionRightSide = document.querySelector(".main_section_rightSide");

//   const handleScroll = () => {
//     // Check if page is scrolled to the bottom:
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//       // If yes, enable scrolling in the main_section_rightSide div:
//       mainSectionRightSide.classList.add("scrollable-hidden-scrollbar");
//     } else {
//       // If not, disable scrolling in the main_section_rightSide div:
//       mainSectionRightSide.classList.remove("scrollable-hidden-scrollbar");
//     }
//   };

//   // Add scroll event listener:
//   window.addEventListener("scroll", handleScroll);

//   // Clean up function to remove event listener when component unmounts:
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);  // Empty dependency array to run effect only once on mount and unmount.

// // ... rest of the component ...

  return (
    <div className="main_section">
      <div className="main_section_leftSide">
        <h3
          className="h3-title"
          onClick={() => setCandlesVisible(!candlesVisible)}
        >
          Candles & Home Fragrances{" "}
          {candlesVisible ? (
            <IoIosArrowUp className="icon" />
          ) : (
            <IoIosArrowDown className="icon" />
          )}
        </h3>
        <AnimatePresence>
          {candlesVisible && (
            <motion.div
              className="items"
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              key="candlesVisible"
              transition={{ duration: 0.5 }}
              style={{ originY: 0 }}
            >
              <div className="item">Candles</div>
              <div className="item">Diffusers & Oils</div>
              <div className="item">Room Sprays</div>
              <div className="item">Candle Holders</div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="line"></div>
        <h3
          className="h3-title"
          onClick={() => setCandles2Visible(!candles2Visible)}
        >
          Candles
          {candles2Visible ? (
            <IoIosArrowUp className="icon" />
          ) : (
            <IoIosArrowDown className="icon" />
          )}
        </h3>
        <AnimatePresence>
          {candles2Visible && (
            <motion.div
              className="items"
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ originY: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="item">Crystal Candles</div>
              <div className="item">Teak Wood Candles</div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="line"></div>

        <h3
          className="h3-title"
          onClick={() => setDiffusersVisible(!diffusersVisible)}
        >
          Diffusers & Oils{" "}
          {diffusersVisible ? (
            <IoIosArrowUp className="icon" />
          ) : (
            <IoIosArrowDown className="icon" />
          )}
        </h3>
        <AnimatePresence>
          {diffusersVisible && (
            <motion.div
              className="items"
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ originY: 0 }}
            >
              <div className="item">Diffusers & Oils</div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="line"></div>

        <h3
          className="h3-title"
          onClick={() => setRoomSpraysVisible(!roomSpraysVisible)}
        >
          Room Sprays{" "}
          {roomSpraysVisible ? (
            <IoIosArrowUp className="icon" />
          ) : (
            <IoIosArrowDown className="icon" />
          )}
        </h3>
        <AnimatePresence>
          {roomSpraysVisible && (
            <motion.div
              className="items"
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ originY: 0 }}
            >
              <div className="item">Room Sprays</div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="line"></div>

        <h3
          className="h3-title"
          onClick={() => setCandleHoldersVisible(!candleHoldersVisible)}
        >
          Candle Holders{" "}
          {candleHoldersVisible ? (
            <IoIosArrowUp className="icon" />
          ) : (
            <IoIosArrowDown className="icon" />
          )}
        </h3>
        <AnimatePresence>
          {candleHoldersVisible && (
            <motion.div
              className="items"
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ originY: 0 }}
            >
              <div className="item">Candle Holders</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="main_section_rightSide">
        <div className="main_section_categories">
          {categories.map((category, index) => (
            <Category
              id={category.id}
              name={category.name}
              img={category.img_link}
            />
          ))}
        </div>

        <h1 className="products_heading">Candles & Home Fragrances <span>35 products</span></h1>

        <div className="main_section_products">
          {products.map((product, index) => (
            <Products  name={product.name} prize={product.prize} img={product.img} id={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default MainSection;
