import React from "react";
import './OrderPage.scss';
import { OrderItem } from "../../OrderItem/OrderItem";
import { Back } from "../../Back/Back";
export const OrderPage: React.FC = () => {
  return (
    <>
      <Back />
      <h1 className="order-title">Order</h1>
      <OrderItem 
        orderSuccess="Success" 
        orderNumber="123456789123123" 
        title="Apple iPhone 11 Pro Max 64GB" 
        otherProducts={["Apple iPhone 12 Mini 64GB", "Apple iPhone 13 Pro 128GB"]} 
        price="$1099" 
      />  
      <OrderItem 
        orderSuccess="Success" 
        orderNumber="123456789123123" 
        title="Apple iPhone 11 Pro Max 64GB" 
        price="$1099" 
      />  

    </>
  );
};
