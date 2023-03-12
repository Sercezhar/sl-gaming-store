import Divider from '../Divider';
import ProductSlider from '../ProductSlider';
import Section from '../Section';
import products from './products';
import { MdVpnKey } from 'react-icons/md';
import SecondaryTitle from '../SecondaryTitle';

function Preorder({ currentCurrency }) {
  return (
    <Section>
      <Divider />

      <SecondaryTitle text="Preorder">
        <MdVpnKey size={20} color="var(--primary-color)" />
      </SecondaryTitle>

      <ProductSlider products={products} currentCurrency={currentCurrency} />
    </Section>
  );
}

export default Preorder;
