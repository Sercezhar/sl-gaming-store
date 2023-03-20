import { MdVpnKey } from 'react-icons/md';
import Divider from '../Divider';
import ProductSlider from '../ProductSlider';
import SecondaryTitle from '../SecondaryTitle';
import Section from '../Section';
import products from './products';

function Preorder({ currentCurrency, currentLanguage, t }) {
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
        t={t}
      />
    </Section>
  );
}

export default Preorder;
