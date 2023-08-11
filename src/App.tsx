import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import i18n from "i18next";

import Header from "@layout/Header/Header";
import Footer from "@layout/Footer/Footer";
import SignIn from "@pages/SignIn/SignIn";
import SignUp from '@pages/SignUp/SignUp';

import classes from './App.module.scss'
import AboutUs from "@pages/AboutUs/AboutUs.tsx";
import Contacts from "@pages/Contacts/Contacts.tsx";
function App() {

    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem('lang') || 'en')
    }, []);

    return (
      <div className={`${classes.App}`}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="" element={<Navigate to="/sign_in" replace />} />
            <Route path="/sign_up" element={<SignUp/>} />
            <Route path="/sign_in" element={<SignIn/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/contacts" element={<Contacts/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
