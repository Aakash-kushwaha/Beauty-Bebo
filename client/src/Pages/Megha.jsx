import React from "react";
import "./megamenu.css";
import { Link } from "react-router-dom";
import {background, Box, Button, Heading } from "@chakra-ui/react";
import {BsCartPlusFill} from "react-icons/bs"
import Cartcounter from "./Cartcounter";

const Megha = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <>
      <nav className="menu" >
        <div className="wrapper" display="flex" gap="4rem" style={{height:"50px" ,background:"#dd0285"}}>
          <div className="logo">
            <input type="radio" name="slide" id="menu-btn" />
            <input type="radio" name="slide" id="cancel-btn" />
          </div>
          <ul style={{}} className="nav-links" id={hover ? "navs__links" : ""}>
            <label className="btn cancel-btn" htmlFor="cancel-btn">
              <i className="fa fa-times"></i>
            </label>
            <li>
              <a
                // to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                MAKEUP
              </a>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                  <Heading fontSize={"16px"}>FACE</Heading>
                    <ul className="mega-links">
                      <li>
                        <Link to="products/facewash" id="bold">
                         BB Cream
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         Blush
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         Bronzer
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         CC Cream
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Contour
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Concealer
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Compact & Powder
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Face Primer
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         Foundation
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         Highlighter
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Loose Powder
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         Makeup Remover
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Makeup Kits
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Makeup Remover
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Setting Spray
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <Heading fontSize={"16px"}>EYE</Heading>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/women">
                         Contact Lenses
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                        Eye Kit
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">Eyeliner</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Eye Shadow</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Eye Primer</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Eye-Palettes</Link>
                      </li>
                      <li>
                        <Link to="gift">Eye Makeup Remover</Link>
                      </li>
                      <li>
                        <Link to="gift">Eye Brow Enhancer</Link>
                      </li>
                      <li>
                        <Link to="/products/women">False Eyelashes</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Kajal</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Mascara</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Under Eye Concealer</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <Heading fontSize={"16px"}>LIPS</Heading>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Men">Lipstick</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">
                        Liquid Lipstick
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Lip Liner</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Lip Gloss</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Lip Balm</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Lip Crayon</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Lip Stain</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Lip Plumber</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <Heading fontSize={"16px"}>Nails</Heading>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Manicure & Pedicure Kits</Link>
                      </li>
                      <li>
                        <Link to="/#"> Nail Polish</Link>
                      </li>
                      <li>
                        <Link to="/#">Nail Care</Link>
                      </li>
                      <li>
                        <Link to="/#">Nail Polish</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                        Nail Art Kits
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Nail Polish Remover</Link>
                      </li>
                     
                    </ul>
                  </div>
                  <div className="row">
                    <Heading fontSize={"16px"}>TOOTH BRUSHES</Heading>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Men">Blush</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Eyelash Curles</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Face Brush</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Lip Brush</Link>
                      </li>

                      <li>
                        <Link to="/#">Makeup Pouches</Link>
                      </li>
                      <li>
                        <Link to="/gift">Mirrors</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Sponges & Application
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                         Sharpners
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Tweezers
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                SKIN
              </a>
              <input type="checkbox" id="showMega" />

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                  <Heading  fontSize={"16px"}>EYE CARE</Heading>
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                         Dark Circles
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                        Eye Contour
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         Eye Cream
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Eye Mask
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         Eye Serums
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                       Puffiness
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         Under Eye Creams
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         Under Eye Wrinkles
                        </Link>
                      </li>
                
                    </ul>
                  </div>

                  <div className="row">
                  <Heading  fontSize={"16px"}>FACE CARE</Heading>
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                         Anit-Ageing Creams
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         Bleach Creams
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Brightening Cream
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Face Wash
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         Facial Wipes
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                        Face Oil
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Face Cleansers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         Facial Kits
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Moisturizers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         Mask & Peels
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                        Serums
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                         Toner & Astrigents
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <Heading fontSize={"16px"}>BODY CARE</Heading>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes"> </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Little Kid (Sizes 12.5-3)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Girls' Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Baby (Sizes 0-4)</Link>
                      </li> 
                      <li>
                        <Link to="/products/Shoes">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Little Kid (Sizes 12.5-3)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Boys' Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Toddler (Sizes 4.5-12)</Link>
                      </li>

                      <li>
                        <Link to="/products/Shoes">
                          Little Kid (Sizes 12.5-3)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">adidas</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">adidas</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">ASICS</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Brooks</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Cole Haan</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Converse</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">New Balance</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Nike</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sam Edelman</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Steve Madden</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">UGG</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                HAIR
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Activewear: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Adidas
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nike
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Z by Zella
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop by Activity
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift">Athleisure</Link>
                      </li>
                      <li>
                        <Link to="/gift">Commuter e</Link>
                      </li>
                      <li>
                        <Link to="/gift">Golf</Link>
                      </li>
                      <li>
                        <Link to="/gift">Hiking</Link>
                      </li>
                      <li>
                        <Link to="/gift">Running</Link>
                      </li>
                      <li>
                        <Link to="/gift">Swim & Surf</Link>
                      </li>
                      <li>
                        <Link to="/gift">Training</Link>
                      </li>
                      <li>
                        <Link to="/gift">Yoga & Barr</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Women's Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/women">Crops & Capris</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Leggings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Shirts & Tees</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Shorts & Skirts</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Socks</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sports Bras</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sweatpants & Joggers</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sweatshirts & Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Swim</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Tanks</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Plus Activewear</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Men's Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Men">Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Socks</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweatpants & Joggers</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweatshirts & Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Swim</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Tanks</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Women's Active Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Hiking & Trail</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Lifestyle</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sport Sandals</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Training</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Walking</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Men's Active Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Hiking & Trail</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Lifestyle</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sport Sandals</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Training</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Walking</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Kids' Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Girls' Activewear</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boys' Activewear</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Kids' Active Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Girls' Active Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boys' Active Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Athletic Gear & Equipment
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
               PERSONAL CARE
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Bags & Accessories: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Handbags Under $100
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Designer Sunglasses Under $100
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Women's Accessories Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Men's Accessories Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift">Bony Levy</Link>
                      </li>
                      <li>
                        <Link to="/gift">Gucci Sunglasses</Link>
                      </li>
                      <li>
                        <Link to="/gift">Kate Spade New York</Link>
                      </li>
                      <li>
                        <Link to="/gift">Marc Jacobs</Link>
                      </li>
                      <li>
                        <Link to="/gift">Ray-Ban</Link>
                      </li>

                      <li>
                        <Link to="/" id="bold">
                          Designer
                        </Link>
                      </li>
                      <li>
                        <Link to="/">Designer Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Designer Handbags</Link>
                      </li>
                      <li>
                        <Link to="/">Designer Sunglasses & Eyewear</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Handbags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/bag">Backpacks</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Beach & Straw Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Bucket Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Clutches & Pouches</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Crossbody Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Designer Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Fanny Packs & Belt Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Mini Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Satchels</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Shoulder Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Totes</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Wallets r</Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Luggage & Travel
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Tech Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Sunglasses & Eyewea
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Jewelry</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/women">Bracelets</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Earrings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Necklaces</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Rings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">14K Gold Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Diamond Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Gold Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Rose Gold Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                          Sterling Silver Jewelry
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women" id="bold">
                          Fine Jewelry
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">Bracelets</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Earrings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Necklaces</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Rings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Women's Accessories</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/women">Belts</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Hair Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Hats</Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                          Ponchos, Kimonos & Capes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                          Sarongs, Caftans & Cover-Ups
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">Scarves</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Winter Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/women" id="bold">
                          Men's Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Bags & Backpacks</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Belts & Suspenders</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Hats</Link>
                      </li>
                      <li>
                        <Link to="/gift">Wallets & Card Cases</Link>
                      </li>
                      <li>
                        <Link to="/gift">Winter Accessories</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                MOM & BABY CARE
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Home: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Bedding Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Home Decor Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Kitchen Appliances Under $100
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Rack Essentials
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop By Brand
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Bath</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Bath Rugs & Mats</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Bath Towels</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Bathroom Decor</Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Bedding
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Comforters & Duvet Inserts
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Duvet Covers</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Mattress Pads & Toppers</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Pillow Cases</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Pillows</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Quilts & Blankets</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Sheet Sets</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Throws</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Decor</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Decorative Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Decorative Pillows</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Faux Plants & Stands</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Home Fragrances, Diffusers & Candles
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Lighting & Lamps</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Rugs & Doormats</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Stationery & Desk Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Window Treatments</Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Holiday Decorations
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Art & Wall Decor
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Art by Color</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Art by Subject</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Art by Type</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Clocks</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Mirrors</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Kitchen & Tabletop</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Bar Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Cookware & Bakeware</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Cutlery & Kitchen Knives
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Dinnerware & Flatware</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Drinkware & Glassware</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Serveware</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Small Appliances</Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Outdoor Living
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Beach & Pool Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Outdoor Dining</Link>
                      </li>

                      <li>
                        <Link to="/products/Home" id="bold">
                          Electronic & Tech Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Headphones & Speakers</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Phone Cases</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Smart Home</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Smart Watches & Bands</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Storage & Cleaning</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Bathroom Storage</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Bedroom & Closet Storage
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Kitchen Storage</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Laundry & Cleaning</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Storage Baskets & Bins</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Vacuum & Floor Care</Link>
                      </li>

                      <li>
                        <Link to="/products/Home" id="bold">
                          Pet Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Games
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Luggage & Travel
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                FREGRANCE
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Beauty: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Prestige Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Natural Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Beauty Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Hair Care Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Skin Care Under $20
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Makeup Under $20
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="gift" id="bold">
                          Beauty Gifts & Sets
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Travel & Mini Sizes
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Charlotte Tilbury</Link>
                      </li>
                      <li>
                        <Link to="gift">Clinique</Link>
                      </li>
                      <li>
                        <Link to="gift">Drybar</Link>
                      </li>
                      <li>
                        <Link to="gift">L'Occitane</Link>
                      </li>
                      <li>
                        <Link to="gift">M.A.C. Cosmetics</Link>
                      </li>
                      <li>
                        <Link to="gift">Mario Badescu</Link>
                      </li>
                      <li>
                        <Link to="gift">Nudestix</Link>
                      </li>
                      <li>
                        <Link to="gift">Shiseido</Link>
                      </li>
                      <li>
                        <Link to="gift">Too Faced</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Urban Decay</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Makeup</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Blush, Bronzer & Highlighter</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Brushes & Tools</Link>
                      </li>
                      <li>
                        <Link to="gift">Concealer & Foundation</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eye Makeup</Link>
                      </li>
                      <li>
                        <Link to="gift">Eyebrows</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eyeshadow & Eyeliner</Link>
                      </li>
                      <li>
                        <Link to="gift">Gifts & Sets</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Lipstick, Lip Gloss & Liner</Link>
                      </li>
                      <li>
                        <Link to="gift">Mascara & Lashes</Link>
                      </li>
                      <li>
                        <Link to="gift">Nail Polish & Care</Link>
                      </li>
                      <li>
                        <Link to="gift">Palettes</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eye Makeup Remover</Link>
                      </li>
                      <li>
                        <Link to="gift">Eye Brow Enhancer</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <Heading fontSize={"16px"}>LIPS</Heading>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Cleansers</Link>
                      </li>
                      <li>
                        <Link to="gift">Exfoliators</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eye Creams & Treatments</Link>
                      </li>
                      <li>
                        <Link to="gift">Face Mists & Toners</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Face Moisturizers</Link>
                      </li>
                      <li>
                        <Link to="gift">Facial Masks</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Gifts & Sets</Link>
                      </li>
                      <li>
                        <Link to="/gift">Lip Balms & Treatments</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Makeup Remover</Link>
                      </li>
                      <li>
                        <Link to="/gift">Serums</Link>
                      </li>
                      <li>
                        <Link to="/gift">Sunscreen</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Tools & Devices</Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Bath & Body
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Hair Care</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Hair & Scalp Treatments</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Hair Dryers & Styling Tools
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Hair Styling Products</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Shampoo & Conditioner</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home" id="bold">
                          Fragrance
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Candles & Diffusers</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Designer Fragrance</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Gifts & Sets</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Perfume</Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Tools, Brushes & Makeup Bags
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Bath & Body Tools</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Hair Styling Tools</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">
                          Makeup Brushes, Tools, & Bags
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Skin Care Tools</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home" id="bold">
                          Men's Grooming & Cologne
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                AYURVEDA
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Beauty: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Prestige Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Natural Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Beauty Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Hair Care Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Skin Care Under $20
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Makeup Under $20
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="gift" id="bold">
                          Beauty Gifts & Sets
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Travel & Mini Sizes
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Charlotte Tilbury</Link>
                      </li>
                      <li>
                        <Link to="gift">Clinique</Link>
                      </li>
                      <li>
                        <Link to="gift">Drybar</Link>
                      </li>
                      <li>
                        <Link to="gift">L'Occitane</Link>
                      </li>
                      <li>
                        <Link to="gift">M.A.C. Cosmetics</Link>
                      </li>
                      <li>
                        <Link to="gift">Mario Badescu</Link>
                      </li>
                      <li>
                        <Link to="gift">Nudestix</Link>
                      </li>
                      <li>
                        <Link to="gift">Shiseido</Link>
                      </li>
                      <li>
                        <Link to="gift">Too Faced</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Urban Decay</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Makeup</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Blush, Bronzer & Highlighter</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Brushes & Tools</Link>
                      </li>
                      <li>
                        <Link to="gift">Concealer & Foundation</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eye Makeup</Link>
                      </li>
                      <li>
                        <Link to="gift">Eyebrows</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eyeshadow & Eyeliner</Link>
                      </li>
                      <li>
                        <Link to="gift">Gifts & Sets</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Lipstick, Lip Gloss & Liner</Link>
                      </li>
                      <li>
                        <Link to="gift">Mascara & Lashes</Link>
                      </li>
                      <li>
                        <Link to="gift">Nail Polish & Care</Link>
                      </li>
                      <li>
                        <Link to="gift">Palettes</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Powder & Setting Sprays</Link>
                      </li>
                      <li>
                        <Link to="gift">Primer</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Skin Care</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Cleansers</Link>
                      </li>
                      <li>
                        <Link to="gift">Exfoliators</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eye Creams & Treatments</Link>
                      </li>
                      <li>
                        <Link to="gift">Face Mists & Toners</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Face Moisturizers</Link>
                      </li>
                      <li>
                        <Link to="gift">Facial Masks</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Gifts & Sets</Link>
                      </li>
                      <li>
                        <Link to="/gift">Lip Balms & Treatments</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Makeup Remover</Link>
                      </li>
                      <li>
                        <Link to="/gift">Serums</Link>
                      </li>
                      <li>
                        <Link to="/gift">Sunscreen</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Tools & Devices</Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Bath & Body
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Hair Care</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Hair & Scalp Treatments</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Hair Dryers & Styling Tools
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Hair Styling Products</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Shampoo & Conditioner</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home" id="bold">
                          Fragrance
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Candles & Diffusers</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Designer Fragrance</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Gifts & Sets</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Perfume</Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Tools, Brushes & Makeup Bags
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Bath & Body Tools</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Hair Styling Tools</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">
                          Makeup Brushes, Tools, & Bags
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Skin Care Tools</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home" id="bold">
                          Men's Grooming & Cologne
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
               BRANDS
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Beauty: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Prestige Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Natural Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Beauty Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Hair Care Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Skin Care Under $20
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Makeup Under $20
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="gift" id="bold">
                          Beauty Gifts & Sets
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Travel & Mini Sizes
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Charlotte Tilbury</Link>
                      </li>
                      <li>
                        <Link to="gift">Clinique</Link>
                      </li>
                      <li>
                        <Link to="gift">Drybar</Link>
                      </li>
                      <li>
                        <Link to="gift">L'Occitane</Link>
                      </li>
                      <li>
                        <Link to="gift">M.A.C. Cosmetics</Link>
                      </li>
                      <li>
                        <Link to="gift">Mario Badescu</Link>
                      </li>
                      <li>
                        <Link to="gift">Nudestix</Link>
                      </li>
                      <li>
                        <Link to="gift">Shiseido</Link>
                      </li>
                      <li>
                        <Link to="gift">Too Faced</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Urban Decay</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Makeup</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Blush, Bronzer & Highlighter</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Brushes & Tools</Link>
                      </li>
                      <li>
                        <Link to="gift">Concealer & Foundation</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eye Makeup</Link>
                      </li>
                      <li>
                        <Link to="gift">Eyebrows</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eyeshadow & Eyeliner</Link>
                      </li>
                      <li>
                        <Link to="gift">Gifts & Sets</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Lipstick, Lip Gloss & Liner</Link>
                      </li>
                      <li>
                        <Link to="gift">Mascara & Lashes</Link>
                      </li>
                      <li>
                        <Link to="gift">Nail Polish & Care</Link>
                      </li>
                      <li>
                        <Link to="gift">Palettes</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Powder & Setting Sprays</Link>
                      </li>
                      <li>
                        <Link to="gift">Primer</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Skin Care</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Cleansers</Link>
                      </li>
                      <li>
                        <Link to="gift">Exfoliators</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eye Creams & Treatments</Link>
                      </li>
                      <li>
                        <Link to="gift">Face Mists & Toners</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Face Moisturizers</Link>
                      </li>
                      <li>
                        <Link to="gift">Facial Masks</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Gifts & Sets</Link>
                      </li>
                      <li>
                        <Link to="/gift">Lip Balms & Treatments</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Makeup Remover</Link>
                      </li>
                      <li>
                        <Link to="/gift">Serums</Link>
                      </li>
                      <li>
                        <Link to="/gift">Sunscreen</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Tools & Devices</Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Bath & Body
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Hair Care</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Hair & Scalp Treatments</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Hair Dryers & Styling Tools
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Hair Styling Products</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Shampoo & Conditioner</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home" id="bold">
                          Fragrance
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Candles & Diffusers</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Designer Fragrance</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Gifts & Sets</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Perfume</Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Tools, Brushes & Makeup Bags
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Bath & Body Tools</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Hair Styling Tools</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">
                          Makeup Brushes, Tools, & Bags
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Skin Care Tools</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home" id="bold">
                          Men's Grooming & Cologne
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div>
          <Box>
            <Link to="/cart"><Button _hover={{ bg: '#dd0285' }} bg={"#dd0285"} fontWeight={"bold"} color="white" leftIcon={<BsCartPlusFill></BsCartPlusFill>}>My CArt</Button>
            </Link>  
              </Box>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Megha;
