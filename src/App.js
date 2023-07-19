import React from 'react';
import InvoiceForm from './components/InvoiceForm';
import Language from './utils/language';
// import InvoiceList from './components/InvoiceList';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className='text-center my-5'>{t('app-name')}</h1>
      <Language />
      <InvoiceForm />
    </div>
  );
}

export default App;
