import './card.css';

interface CardProps {
    price: number;
    name: string;
    description: string;
    image: string;
}

export function Card({ price, image, name, description }: CardProps) {
    return (
        <div className="card">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p className='description'>{description}</p>
            <p><b>Valor:</b>{price}</p>
        </div>
    );
}