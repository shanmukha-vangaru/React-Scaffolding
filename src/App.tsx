import React from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation('common');

  return <h1>{t('welcome.title', { framework: 'React' })}</h1>;
};

export default App;
