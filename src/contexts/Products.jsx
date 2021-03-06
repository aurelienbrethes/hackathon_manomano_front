import React, { createContext, useState } from "react";

const ProductsContext = createContext({
  products: [],
  productsOnCart: [],
});

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsOnCart, setProductsOnCart] = useState([]);
  const [idOrder, setIdOrder] = useState();

  const modifyProductInCart = (idProduct, quantity) => {
    // if quantity is 0, the product must be deleted from cart
    if (quantity === 0) {
      setProductsOnCart(
        productsOnCart.filter((product) => product.id_product != idProduct)
      );
    }
    // else just remove 1 from quantity
    else {
      const position = productsOnCart.findIndex(
        (product) => product.id_product === idProduct
      );
      const updatedProductsOnCart = [...productsOnCart];
      updatedProductsOnCart[position].quantity = quantity;
      setProductsOnCart(updatedProductsOnCart);
    }
  };

  const addProductInCart = (idProduct) => {
    // If a product isn't in the cart, add it
    const position = productsOnCart.findIndex(
      (product) => product.id_product === idProduct
    );

    if (position === -1) {
      const positionInProducts = products.find(
        (product) => product.id_product === idProduct
      );
      const updatedProductsOnCart = [...productsOnCart];
      updatedProductsOnCart.push({ quantity: 1, ...positionInProducts });
      setProductsOnCart(updatedProductsOnCart);
    }
    // Else, just add 1 to quantity
    else {
      const position = productsOnCart.findIndex(
        (product) => product.id_product === idProduct
      );
      const updatedProductsOnCart = [...productsOnCart];
      updatedProductsOnCart[position].quantity++;
      setProductsOnCart(updatedProductsOnCart);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        productsOnCart,
        setProductsOnCart,
        modifyProductInCart,
        addProductInCart,
        idOrder,
        setIdOrder,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
