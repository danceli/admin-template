import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ConfigProvider } from 'antd';
import { setLanguage } from './redux/modules/global/actions';
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import i18n from "i18next";
import { getBrowserLang } from './utils/utils';
import Router from './router/index'

function App(props: any) {
  const { assemblySize, language, themeConfig } = props;
  const [i18nLocale, setI18nLocale] = useState(zhCN);

  const setAntdLanguage = () => {
    if (language && language === 'zh') return setI18nLocale(zhCN);
    if (language && language === 'en') return setI18nLocale(enUS);

    if (getBrowserLang() === "zh") return setI18nLocale(zhCN);
		if (getBrowserLang() === "en") return setI18nLocale(enUS);
  }

  useEffect(() => {
    i18n.changeLanguage(language || getBrowserLang());
    setLanguage(language || getBrowserLang());
    
		setAntdLanguage();
  }, [language])

  return (
      <ConfigProvider locale={i18nLocale} componentSize={assemblySize}>
        <Router />
      </ConfigProvider>
  );
}

const mapStateToProps = (state: any) => state.global;

const mapActionToProps = (dispatch: any) => ({
  setLanguage: (language: string) => dispatch(setLanguage(language))
})

export default connect(mapStateToProps, mapActionToProps)(App);
