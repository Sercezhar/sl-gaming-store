import { useTranslation } from 'react-i18next';
import { IoMdWallet } from 'react-icons/io';
import Divider from '../Divider';
import ProductSlider from '../ProductSlider';
import SecondaryTitle from '../SecondaryTitle';
import Section from '../Section';
import products from './products';

function BestDeals({ currentCurrency, currentLanguage, cart }) {
  const [t] = useTranslation('global');

  return (
    <Section>
      <Divider />

      <SecondaryTitle text={t('bestDeals.title')}>
        <IoMdWallet size={20} color="var(--primary-color)" />
      </SecondaryTitle>

      <ProductSlider
        products={products}
        currentCurrency={currentCurrency}
        currentLanguage={currentLanguage}
        cart={cart}
      />
    </Section>
  );
}

export default BestDeals;
