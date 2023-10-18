import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from "../../hooks/useProduct";

const SingleProductPage = () => {
    const { products } = useProducts();
    const { id } = useParams();
    const product = products.find(p => p.id.toString() === id);

    if (!product) {
        return <p>Товар не знайдено</p>;
    }

    return (
        <div className="product-container-one">
            <h2 className="product-title">{product.name}</h2>
            <img className="product-image" src={product.photo} alt={product.name} />
            <p className="product-description">{product.description}</p>
            <Link to="/product" className="back-link">Назад до товарів</Link>
        </div>
    );
};

export default SingleProductPage;
