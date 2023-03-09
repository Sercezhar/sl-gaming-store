import { IoMdWallet } from 'react-icons/io';
import Divider from '../Divider';
import ProductSlider from '../ProductSlider';
import SecondaryTitle from '../SecondaryTitle';
import Section from '../Section';
import BestDealsItem from './BestDealsItem';
import products from './products';

function BestDeals() {
  return (
    <Section>
      <Divider />

      <SecondaryTitle text="Best deals">
        <IoMdWallet size={20} color="var(--primary-color)" />
      </SecondaryTitle>

      <ProductSlider array={products}>
        {products.map((product, index) => (
          <BestDealsItem product={product} key={index} />
        ))}
      </ProductSlider>
    </Section>
  );
}

export default BestDeals;
