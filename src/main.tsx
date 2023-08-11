import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import i18n from './i18n';
import {store} from "@shared/redux/store";
import {Provider} from 'react-redux';
import App from "./App.tsx";
import { I18nextProvider } from 'react-i18next';

import './index.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <Suspense>
            <I18nextProvider i18n={i18n}>
                <App/>
            </I18nextProvider>
        </Suspense>
    </Provider>
);


