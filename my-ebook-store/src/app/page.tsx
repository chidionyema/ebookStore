import React from 'react';
import axios from 'axios';

const EbookPage = () => {
  const handlePurchase = async () => {
    const { data } = await axios.post('/api/checkout_sessions', { itemId: 'your-ebook-id' });
    window.location = `https://checkout.stripe.com/pay/${data.sessionId}`;
  };

  return (
    <div>
      {/* eBook details */}
      <button onClick={handlePurchase}>Buy Now</button>
    </div>
  );
};

export default EbookPage;
