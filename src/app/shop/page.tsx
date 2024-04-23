"use client";

import ProductCart from "@/components/product-cart";
import useFetch from "@/hooks/use-fetch";
import React, { useState } from "react";
import * as S from "./styled";
import Input  from "@/common/input"


const Shop = () => {
  const apiUrl = "https://api.escuelajs.co/api/v1/products";
  const [data, loading, error] = useFetch(apiUrl);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <S.ShopContainer>
      <S.SearchLiner>
      <form onChange={handleSearchInputChange}>
        <Input value={searchQuery} variant="primary"/>
      </form>
      </S.SearchLiner>
      <S.ProductContainer>
        {filteredData?.map((item) => <ProductCart key={item.id} item={item} />)}
      </S.ProductContainer>
    </S.ShopContainer>
  );
};

export default Shop;
