import {useTranslation} from "react-i18next";
import {useState} from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

    const {t} = useTranslation()
    const [checked, setChecked] = useState(false)
    const [DTO, setDTO] = useState({
        email:'',
        name:'',
        surname:'',
        password:'',
        confirmPassword:'',
    })

    return (
        <div className="container h-100 d-flex align-items-center">
            <div className="text-center mx-auto" style={{maxWidth: '330px'}}>
                <input type="hidden" name="action" value="sign-up"/>
                <h3 className="mb-4">{t('sign.up.title')}</h3>
                <form action="">
                    <div className="form-floating">
                        <input className="form-control"
                               type="email"
                               name="email"
                               id="email"
                               placeholder="name@example.com"
                               pattern="^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,6}$"
                               value={DTO.email}
                               onChange={(e) => setDTO(prevState => ({...prevState, email:e.target.value}))}
                               required/>
                        <label htmlFor="email">{t('email')}</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input className="form-control"
                               type="text"
                               id="name"
                               name="name"
                               placeholder="Name"
                               pattern="^[A-Za-zА-ЩЬЮЯҐІЇЄа-щьюяґіїє'\- ]{1,30}"
                               title={t('name.requirements')}
                               value={DTO.name}
                               onChange={(e) => setDTO(prevState => ({...prevState, name:e.target.value}))}
                               required/>
                        <label htmlFor="name">{t('name')}</label>
                        {/*<tags:contains error="${error}" value="name"/>*/}
                    </div>
                    <div className="form-floating mt-2">
                        <input className="form-control"
                               type="text"
                               name="surname"
                               id="surname"
                               placeholder="Surname"
                               pattern="^[A-Za-zА-ЩЬЮЯҐІЇЄа-щьюяґіїє'\- ]{1,30}"
                               value={DTO.surname}
                               onChange={(e) => setDTO(prevState => ({...prevState, surname:e.target.value}))}
                               required/>
                        <label htmlFor="surname">{t('surname')}</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input className="form-control"
                               type={checked ? 'text' : 'password'}
                               name="password"
                               id="password"
                               placeholder="Password"
                               pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$"
                               value={DTO.password}
                               onChange={(e) => setDTO(prevState => ({...prevState, password:e.target.value}))}
                               title={t('password.requirements')}
                               required/>
                        <label htmlFor="password">{t('password')}</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input className="form-control"
                               type={checked ? 'text' : 'password'}
                               name="confirm-password"
                               id="confirm-password"
                               placeholder="Password"
                               pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$"
                               title={t('password.requirements')}
                               value={DTO.confirmPassword}
                               onChange={(e) => setDTO(prevState => ({...prevState, confirmPassword:e.target.value}))}
                               required/>
                        <label htmlFor="confirm-password">{t('confirm.pass')}</label>
                    </div>
                    <div className="checkbox text-start mt-1 mx-3 mb-1">
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                               onClick={() => setChecked(prevState => !prevState)}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t('show.pass')}
                        </label>
                    </div>
                    <div className="g-recaptcha" data-sitekey="6Lf3IcAkAAAAAM0wQKit8-gYW0PkTywoLQ6cTfw_"></div>
                    <button className="w-100 btn btn-lg btn-primary mb-4 mt-4" type="submit">{t('sign.up')}</button>
                </form>

                {/*<tags:contains error="${requestScope.error}" value="captcha"/><br>*/}

                <p className="m-0 mb-3">
                    {t('have.account')}
                    &nbsp;
                    <Link to='../sign_in' className="link-dark">
                        {t('sign.in')}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;