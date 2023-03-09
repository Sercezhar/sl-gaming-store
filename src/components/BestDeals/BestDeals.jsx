import { IoMdWallet } from 'react-icons/io';
import Divider from '../Divider';
import ProductSlider from '../ProductSlider';
import SecondaryTitle from '../SecondaryTitle';
import Section from '../Section';
import products from './products';

function BestDeals() {
  return (
    <Section>
      <Divider />

      <SecondaryTitle text="Best deals">
        <IoMdWallet size={20} color="var(--primary-color)" />
      </SecondaryTitle>

      <ProductSlider products={products} />
    </Section>
  );
}

export default BestDeals;
