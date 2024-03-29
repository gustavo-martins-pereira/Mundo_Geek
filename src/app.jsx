import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { Register } from "./pages/register";
import { Login } from "./pages/Login";
import { Products } from "./pages/Products";
import { NewProduct } from "./pages/NewProduct";
import { ProductInfo } from "./pages/ProductInfo";

import 'reset-css';
import 'normalize.css';
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

const GlobalStyle = createGlobalStyle`
    /*============================== Configurations ==============================*/
    :root {
        /*=============== COLORS ===============*/
        --black-color: hsl(0, 0%, 0%);
        --tundora-color: hsl(0, 0%, 27%);
        --silver-chalice-color: hsl(0, 0%, 63%);
        --silver-color: hsl(0, 0%, 78%);
        --wild-sand-color: hsl(0, 0%, 96%);
        --white-color: hsl(0, 0%, 100%);
        --red-color: hsl(0, 100%, 50%);
        --royal-blue-color: hsl(214, 77%, 52%);
        --royal-blue-50-color: hsla(214, 77%, 52%, 0.5);
        --hawkes-blue-color: hsl(214, 82%, 95%);


        /*=============== BACKGROUNDS ===============*/
        --button-background-color: var(--royal-blue-color);
        --input-background-color: var(--white-color);
        --search-input-background-color: var(--wild-sand-color);
        --products-background-color: var(--wild-sand-color);
        --product-background-color: var(--wild-sand-color);
        --login-background-color: var(--wild-sand-color);
        --all-products-background-color: var(--wild-sand-color);
        --new-product-background-color: var(--wild-sand-color);
        --footer-background-color: var(--hawkes-blue-color);
        --develop-by-background-color: var(--white-color);
        
    
        /*=============== BORDERS ===============*/
        --button-border-color: var(--royal-blue-color);
        --input-bottom-border-color: var(--silver-color);
        --input-focus-border-color: var(--royal-blue-50-color);
    

        /*=============== TEXT COLORS ===============*/
        --button-text-color: var(--royal-blue-color);
        --black-text-color: var(--black-color);
        --white-text-color: var(--white-color);
        --product-title-text-color: var(--tundora-color);
        --view-all-products-text-color: var(--royal-blue-color);
        --title-text-color: var(--tundora-color);
        --view-product-text-color: var(--royal-blue-color);
        --footer-link-text-color: var(--tundora-color);
        --form-legend-text-color: var(--tundora-color);
        --input-description-text-color: var(--silver-chalice-color);
        --input-placeholder-text-color: var(--silver-chalice-color);
        --develop-by-text-color: var(--tundora-color);
        --error-message-text-color: var(--red-color);
        --required-input-text-color: var(--red-color);


        /*=============== FONTS ===============*/
        --default-font: "Raleway", "Arial" , "Helvetica", sans-serif;


        /*=============== MEASURES ===============*/
        --padding-left-right: 1rem;
    }
    
    /*============================== GENERIC ELEMENTS ==============================*/
    html,
    body {
        font-family: var(--default-font);
        font-size: 16px;
    }

    a {
        text-decoration: none;
    }

    
    /*============================== GENERIC CLASSES ==============================*/
    .tablet,
    .desktop {
        display: none;
    }
    
    
    /*=============== RESPONSIVE LAYOUTS ===============*/
    @media screen and (min-width: 768px) {
        /*============================== Configurations ==============================*/
        :root {
            /*=============== MEASURES ===============*/
            --padding-left-right: 2rem;
        }

        /*============================== GENERIC ELEMENTS ==============================*/
        html,
        body {
            font-size: 20px;
        }


        /*============================== GENERIC CLASSES ==============================*/
        .mobile {
            display: none;
        }

        .tablet {
            display: initial;
        }
    }

    @media screen and (min-width: 1280px) {
        /*============================== Configurations ==============================*/
        :root {
            /*=============== MEASURES ===============*/
            --padding-left-right: 4rem;
        }

        /*============================== GENERIC ELEMENTS ==============================*/
        html,
        body {
            font-size: 24px;
        }


        /*============================== GENERIC CLASSES ==============================*/
        .mobile,
        .tablet {
            display: none;
        }

        .desktop {
            display: initial;
        }
    }
`;

export function App() {
    const [user, setUser] = useState(undefined);

    function authenticate(user) {
        setUser(user);
    }

    return (
        <BrowserRouter>
            <GlobalStyle />
            <ScrollToTop />

            <Header user={user} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login onAuthenticate={authenticate} />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductInfo />} />
                <Route path="/new-product" element={<NewProduct />} />
            </Routes>

            <Footer />

            <Toaster richColors  />
        </BrowserRouter>
    );
}
