import {useTranslation} from "react-i18next";

const Contacts = () => {

    const {t} = useTranslation()

    return (
        <div className="container h-100 d-flex align-items-center">
            <div>
                <h1 className="display-5 fw-bold mt-5 mb-3">{t('contacts.title')}</h1>
                <p className="mb-4" style={{maxWidth: '500px'}}>{t('contacts.text')}</p>
                <dl>
                    <div className="mt-4">
                        <dt>{t('contacts.enquiries')}</dt>
                        <dd>info@gmail.com</dd>
                    </div>
                    <div className="mt-4">
                        <dt>{t("contacts.academy")}</dt>
                        <dd>academy@gmail.com</dd>
                    </div>
                    <div className="mt-4">
                        <dt>{t("contacts.telephone")}</dt>
                        <dd>0113 288 6000</dd>
                    </div>
                    <div className="mt-4">
                        <dt>{t("contacts.address")}</dt>
                        <dd>Wike Ridge Lane, Shadwell, Leeds, LS17 9JW</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default Contacts;