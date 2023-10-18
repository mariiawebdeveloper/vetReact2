import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProduct';

const ProductPage = () => {
    const { products } = useProducts();

    return (
        <div className="products">
            <p className="shopTitle">Товари для тварин</p>
            <div className="product-container">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <Link to={`/product/${product.id}`} className="product-link">
                            <img
                                src={product.photo}
                                alt={product.name}
                                className="product-image"
                            />
                            <div className="description">
                                <p>
                                    <b>{product.name}</b>
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
