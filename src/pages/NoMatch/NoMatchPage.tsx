import React from 'react';
import { useTranslation } from 'react-i18next';

import PageContainer from '../../components/PageContainer';

const NoMatchPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer center row>
      <h1>404</h1>
      <div>{t('error.404')}</div>
    </PageContainer>
  );
};

export default NoMatchPage;
