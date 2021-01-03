import { useState, useEffect } from "react";

export const useInfiniteScroll = url => {
  const [productList, setProductList] = useState([]);
  const [items, setItems] = useState(10);
  const [preItems, setPreItems] = useState(0);

  useEffect(() => {
    getData();
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, []);

  const getData = async () => {
    const res = await fetch(url);
    const { data } = await res.json();
    const result = data.slice(preItems, items);
    setProductList([...productList, ...result]);
  };

  const infiniteScroll = () => {
    const { documentElement, body } = document;

    const scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight
    );
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPreItems(items);
      setItems(items + 10);
      getData();
    }
  };

  return productList;
};
