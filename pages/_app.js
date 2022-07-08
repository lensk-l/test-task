import '../styles/global.css'import {wrapper} from '../store/store.config';import {IntlProvider} from "react-intl";import UKRAINIAN from "../content/compiled-locales/ua.json";import RUSSIAN from "../content/compiled-locales/ru.json";import {useRouter} from "next/router";import {useMemo} from "react";const MyApp = ({Component, pageProps}) => {    const { locale } = useRouter();    const [shortLocale] = locale ? locale.split("-") : ["ru"];    const messages = useMemo(() => {        switch (shortLocale) {            case "uk":                return UKRAINIAN;            case "ru":                return RUSSIAN;            default:                return UKRAINIAN;        }    }, [shortLocale]);    return (        <IntlProvider            locale={locale}            messages={messages}            onError={() => null}>            <Component {...pageProps} />        </IntlProvider>    )}export default wrapper.withRedux(MyApp);