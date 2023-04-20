function handlePriceDiscount(price, discount, currency) {
  const fixedNumber = currency === 0 ? 2 : 0;

  if (discount) {
    const discountedPrice = price - (price / 100) * discount;
    const discountedPriceFixed =
      ~~(Math.pow(10, fixedNumber) * discountedPrice) /
      Math.pow(10, fixedNumber);

    return currency === 0
      ? `$${discountedPriceFixed.toFixed(2)}`
      : `${discountedPriceFixed}₴`;
  }

  return currency === 0 ? `$${price.toFixed(2)}` : `${price}₴`;
}

export default handlePriceDiscount;
