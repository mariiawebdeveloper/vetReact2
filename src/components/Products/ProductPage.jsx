import { Link } from 'react-router-dom';

export const products = [
    { id: 1, name: 'Корм для кішок', description: 'Делікатний корм для задоволення смаку вашої кішки.' },
    { id: 2, name: 'Кіготь для собак', description: 'Найкращий спосіб допомогти вашій собаці тримати свої кігті в хорошому стані.' },
];

const ProductPage = () => {
    return (
        <div>
            <h2>Товари для тварин</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            {product.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductPage;