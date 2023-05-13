import React, { useState } from "react";
import "./MainSection.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Category from "./Category";

const variants = {
  open: { opacity: 1, scaleY: 1 },
  closed: { opacity: 0, scaleY: 0 },
};

const categories = [
  {
    name: "Candles",
    id: 1,
    img_link:"https://www.artisanlab.in/cdn/shop/products/0F1A0297a_720x.jpg?v=1611993848",
  },
  {
    name: "Diffusers & oils ",
    id: 2,
    img_link:"https://www.artisanlab.in/cdn/shop/products/0F1A0297a_720x.jpg?v=1611993848",
  },
  {
    name: "room Spray",
    id: 3,
    img_link:"https://www.artisanlab.in/cdn/shop/products/0F1A0297a_720x.jpg?v=1611993848",
  },
  {
    name: "Candle Holders",
    id: 4,
    img_link:"https://www.artisanlab.in/cdn/shop/products/0F1A0297a_720x.jpg?v=1611993848",
  },
];

const MainSection = () => {
  const [candlesVisible, setCandlesVisible] = useState(false);
  const [candles2Visible, setCandles2Visible] = useState(false);
  const [diffusersVisible, setDiffusersVisible] = useState(false);
  const [roomSpraysVisible, setRoomSpraysVisible] = useState(false);
  const [candleHoldersVisible, setCandleHoldersVisible] = useState(false);

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
            <Category id={category.id} name={category.name} img = {category.img_link}/>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MainSection;
