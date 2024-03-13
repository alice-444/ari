const FormatPrice = (price) => {
    const roundedPrice = Math.round(price * 100) / 100;
  
    const formattedPrice = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(roundedPrice);
  
    return formattedPrice;
  };

  export default FormatPrice