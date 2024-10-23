function convertEURToUSD(euro) {
    const exchangeRate = 1.08; // 1 Euro = 1.08 USD
    return euro * exchangeRate;
  }
  
  function convertUSDToEUR(usd) {
    const exchangeRate = 0.93; // 1 USD = 0.93 Euro
    return usd * exchangeRate;
  }
  
  function convertPrices(currency) {
    const prices = document.querySelectorAll('.price');
  
    prices.forEach(priceElement => {
      const originalPrice = parseFloat(priceElement.getAttribute('data-price'));
  
      if (currency === 'EUR') {
        const euroPrice = convertUSDToEUR(originalPrice);
        priceElement.innerText = `€${euroPrice.toFixed(2)}`;
      } else if (currency === 'USD') {
        const usdPrice = originalPrice;
        priceElement.innerText = `$${usdPrice.toFixed(2)}`;
      }
    });
  }
  