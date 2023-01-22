import React from 'react';
import { useTranslation } from 'react-i18next';

export interface AppProps {
  framework: string;
}

const App = (appProps: AppProps) => {
  const { t } = useTranslation('common');

  return <h1>{t('welcome.title', { framework: appProps.framework })}</h1>;
};

export default App;
