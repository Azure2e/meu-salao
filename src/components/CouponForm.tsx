
// src/components/CouponForm.tsx
import React, { useState } from 'react';
interface CouponFormProps {
  onApplyCoupon: (code: string) => void;
}
const CouponForm: React.FC<CouponFormProps> = ({ onApplyCoupon }) => {
  const [couponCode, setCouponCode] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onApplyCoupon(couponCode);
    setCouponCode('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Código do Cupom"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        required
      />
      <button type="submit">Aplicar Cupom</button>
    </form>
  );
};
export default CouponForm;