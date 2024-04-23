import React, { useState,useEffect } from "react";
import * as S from "./styled";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string;
}
const ProductCart: React.FC<{ item: Product }> = ({ item }) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(item.price);

    const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const removeCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  useEffect(()=>{
    setPrice(item.price * count);
    console.log(price);
  },[count])
  return (
    <S.ProductCart>
      <S.Image src={item.images} alt={item.title}></S.Image>
      <S.Title>{item.title}</S.Title>

      <S.CountLiner>
        <S.Price>{price}&#36;</S.Price>
        <S.Span onClick={addCount}>&#43;</S.Span>
        {count}
        <S.Span onClick={removeCount}>&#8722;</S.Span>
      </S.CountLiner>
    </S.ProductCart>
  );
};

export default ProductCart;
