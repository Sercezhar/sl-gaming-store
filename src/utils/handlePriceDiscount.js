function handlePriceDiscount(price, discount) {
  if (discount) {
    const discountedPrice = price - (price / 100) * discount;
    const discountedPriceFixed =
      ~~(Math.pow(10, 2) * discountedPrice) / Math.pow(10, 2);

    return discountedPriceFixed.toFixed(2);
  }

  return price.toFixed(2);
}

export default handlePriceDiscount;
