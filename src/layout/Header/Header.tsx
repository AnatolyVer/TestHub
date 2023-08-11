import { useTranslation } from 'react-i18next';
import {ChangeEvent} from "react";
import i18n from "i18next";
import {Link} from "react-router-dom";
import Admin from "./ADMIN.tsx";
import Blocked from "./BLOCKED.tsx";
import Student from "./STUDENT.tsx";

const Header = () => {

    const role = "STUDENT"
    const { t } = useTranslation();

    const signed = false

    const layouts = {
        'ADMIN': <Admin/>,
        'STUDENT': <Student/>,
        'BLOCKED':<Blocked/>
    }

    const sign = (
        <>
           <Link className="btn btn-outline-primary me-2" to='/sign_in'>
                {t('sign.in')}
            </Link>
            <Link className="btn btn-outline-primary me-2" to='/sign_up'>
                {t('sign.up')}
            </Link>
        </>
    )

    const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('lang', selectedLanguage)
    };

    return (
        <header className="container d-flex flex-wrap align-items-center justify-content-md-between py-3 mb-4 border-bottom fixed-top bg-white" >
            <span className="col-md-4 d-flex">
                <a href="index.jsp" className="d-flex text-dark text-decoration-none fs-4 fw-bold">
                  <span className="">Test</span>
                  <span className="bg-primary text-white rounded px-1">Hub</span>
                </a>
            </span>

            <ul className="nav col-md-auto mb-md-0">
                <li><a href="index.jsp" className="nav-link px-2 link-dark">{t('home')}</a></li>

                <li>
                    <Link className="nav-link px-2 link-dark" to='/about'>
                        {t('about')}
                    </Link>
                </li>

                <li>
                    <Link className="nav-link px-2 link-dark" to='/contacts'>
                        {t('contacts')}
                    </Link>
                </li>
            </ul>

            <div className="col-md-4 d-flex justify-content-end">
                {signed ? layouts[role] : sign}
                <div className="my-auto ms-1">
                    <label>
                        <select defaultValue={localStorage.getItem('lang')!} className="border-0 rounded" name="locale" onChange={changeLanguage}>
                            <option value="en">
                                EN
                            </option>
                            <option value="uk">
                                UA
                            </option>
                        </select>
                    </label>
                </div>
            </div>

        </header>
    );
};

export default Header;