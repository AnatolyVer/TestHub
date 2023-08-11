import {useTranslation} from "react-i18next";

const Blocked = () => {

    const { t } = useTranslation();

    return (
        <>
            <p className="text-danger my-auto px-2">{t('blocked.account')}</p>
            <a href="profile.jsp" className="nav-link link-dark px-2 my-auto border-end">{t('profile')}</a>
        </>
    );
};

export default Blocked;