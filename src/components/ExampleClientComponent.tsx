'use client';

import { useTranslation } from 'react-i18next';

export default function ExampleClientComponent() {
  const { t } = useTranslation();
  const name = "John";

  return <h3>{t('greeting', { name: name })}</h3>;
}