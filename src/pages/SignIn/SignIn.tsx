import { useTranslation } from "react-i18next";
import {FormEvent, useState} from "react";
import { Link } from "react-router-dom";

import {signIn} from "@shared/redux/saga/API";

const SignIn = () => {

    const { t } = useTranslation();
    const [checked, setChecked] = useState(false)
    const [DTO, setDTO] = useState({
        email: '',
        password: '',
    });

    const sendData = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const {data} = await signIn(DTO);
            console.log(data);
        } catch (e: unknown) {
            console.error(e)
        }
    };

    return (
        <div className="container h-100 d-flex align-items-center">
            <div className="text-center mx-auto" style={{ maxWidth: '330px' }}>
                <form onSubmit={event => sendData(event)}>
                    <input type="hidden" name="action" value="sign-in" />
                    <h3 className="mb-4">{t('sign.in.title')}</h3>
                    <div className="form-floating">
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            value={DTO.email}
                            onChange={(event) => setDTO(prevState => ({...prevState, email: event.target.value }))}
                            required
                        />
                        <label htmlFor="email">{t('email')}</label>
                    </div>
                    <br />
                    <div className="form-floating">
                        <input
                            className="form-control"
                            type={checked ? 'text' : 'password'}
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={DTO.password}
                            onChange={(event) => setDTO(prevState => ({...prevState, password: event.target.value }))}
                            required
                        />
                        <label htmlFor="password">{t('password')}</label>
                    </div>

                    <div className="checkbox text-start mx-3 my-1">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            onClick={() => setChecked(prevState => !prevState)}
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t('show.pass')}
                        </label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary my-4" type="submit">
                        {t('sign.in')}
                    </button>

                    <p className="mt-1">
                        {t('forgot.password')}
                        &nbsp;
                        <Link to="../reset_password" className="link-dark">
                            {t('reset.password')}
                        </Link>
                    </p>

                    <p className="mt-1">
                        {t('no.account')}
                        &nbsp;
                        <Link to="../sign_up" className="link-dark">
                            {t('sign.up')}
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
