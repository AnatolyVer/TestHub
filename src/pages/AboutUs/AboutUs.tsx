import {useTranslation} from "react-i18next";

const AboutUs = () => {

    const {t} = useTranslation()

    return (
        <div className="container h-100 d-flex flex-column justify-content-center">
            <div className="text-center">
                <h2>{t("about")}</h2>
                <p className="m-auto" style={{maxWidth: "800px"}}>{t('about.text')}</p>
            </div>
            <div>
                <div className="row text-center mt-5">
                    <div className="col-lg-4">
                        <h4>{t('about.registered.users')}</h4>
                        <p className="bg-secondary rounded py-1 text-white mx-auto" style={{width: "75px"}}>120,542</p>
                    </div>
                    <div className="col-lg-4">
                        <h4>{t('about.created.tests')}</h4>
                        <p className="bg-secondary rounded py-1 text-white mx-auto" style={{width: "75px"}}>10,047</p>
                    </div>
                    <div className="col-lg-4">
                        <h4>{t("about.solved.tests")}</h4>
                        <p className="bg-secondary rounded py-1 text-white mx-auto" style={{width: "75px"}}>995,479</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;