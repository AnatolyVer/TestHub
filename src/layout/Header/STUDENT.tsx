import {useTranslation} from "react-i18next";

const Student = () => {

    const { t } = useTranslation();

    return (
        <>
            <div className="dropdown">
                <button className="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {t("tests")}
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="controller?action=view-tests">{t("solve.tests")}</a></li>
                    <li><a className="dropdown-item" href="controller?action=view-results">{t("view.results")}</a></li>
                </ul>
            </div>
            <a href="profile.jsp" className="nav-link link-dark px-2 my-auto border-end">{t("profile")}</a>
        </>
    );
};

export default Student;