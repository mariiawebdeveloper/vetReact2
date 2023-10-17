
import { useParams, Link } from 'react-router-dom';
import {products} from "./ProductPage";

const SingleProductPage = () => {
    const { id } = useParams();
    const product = products.find(p => p.id.toString() === id);
    if (!product) {
        return <p>Товар не знайдено</p>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to="/products">Назад до товарів</Link>
        </div>
    );
};

export default SingleProductPage;
