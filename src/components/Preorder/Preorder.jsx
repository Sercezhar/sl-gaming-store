import { MdVpnKey } from 'react-icons/md';
import Divider from '../Divider';
import ProductSlider from '../ProductSlider';
import SecondaryTitle from '../SecondaryTitle';
import Section from '../Section';
import products from './products';
import { useTranslation } from 'react-i18next';

function Preorder({ currentCurrency, currentLanguage, cart, addToCart }) {
  const [t] = useTranslation('global');

  return (
    <Section>
      <Divider />

      <SecondaryTitle text={t('preorder.title')}>
        <MdVpnKey size={20} color="var(--primary-color)" />
      </SecondaryTitle>

      <ProductSlider
        products={products}
        currentCurrency={currentCurrency}
        currentLanguage={currentLanguage}
        cart={cart}
        addToCart={addToCart}
      />
    </Section>
  );
}

export default Preorder;
