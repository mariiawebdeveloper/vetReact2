import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProduct';

const ProductPage = () => {
    const { products } = useProducts();
    const [sortedProducts, setSortedProducts] = useState([...products]);
    const [sortType, setSortType] = useState('');

    const handleSortChange = (value) => {
        setSortType(value);
        sortProducts(value);
    };

    const sortProducts = (type) => {
        let sorted;

        if (type === 'price-asc') {
            sorted = [...products].sort((a, b) => a.price - b.price);
        } else if (type === 'price-desc') {
            sorted = [...products].sort((a, b) => b.price - a.price);
        } else if (type === 'alphabetical') {
            sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
        } else {
            sorted = [...products];
        }

        setSortedProducts(sorted);
    };

    return (
        <div className="products">
            <p className="shopTitle">Товари для тварин</p>
            <div className={"selector"}>
                <select value={sortType} onChange={(e) => handleSortChange(e.target.value)}>
                    <option value="">Сортувати за:</option>
                    <option value="price-asc">Ціною (зростаюча)</option>
                    <option value="price-desc">Ціною (спадаюча)</option>
                    <option value="alphabetical">За абеткою</option>
                </select>
            </div>



            <div className="product-container">
                {sortedProducts.map((product) => (
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
                                <p>
                                    <b>{product.price}</b><b>грн</b>
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
