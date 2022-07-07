import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';

import Cart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      {product?.images[0] && <Image src={product.images[0]} width={240} height={240} alt={product?.title} />}
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image src={Cart} width={50} height={50} alt="add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
