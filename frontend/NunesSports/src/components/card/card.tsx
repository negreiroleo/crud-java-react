import './card.css';
import { ProductData } from '../../interface/ProductData';

interface CardProps {
    product: ProductData;
    onEdit: () => void;
    onDelete: () => void;
}

export function Card({ product, onEdit, onDelete }: CardProps) {
    const { name, price, image, description } = product;

    return (
        <div className="card">
            <button className="delete-button" onClick={onDelete}>X</button>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p><b>Preço:</b> R$ {price}</p>
            <button className="edit-button" onClick={onEdit}>Editar</button>
        </div>
    );
}
