import { useEffect, useState } from 'react';
import { useProductDataMutate } from '../../hooks/useProductDataMutate';
import { ProductData } from '../../interface/ProductData';

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = useProductDataMutate();

    const submit = () => {
        const foodData: ProductData = {
            name,
            description, 
            price,
            image
        }
        mutate(foodData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
        <div className="modal-body">
            <h2>Cadastre um novo produto</h2>
                <form className="input-container">
                    <Input label="Nome" value={name} updateValue={setName} />
                    <Input label="Descrição" value={description} updateValue={setDescription} />
                    <Input label="Preço" value={price} updateValue={setPrice} />
                    <Input label="URL da Imagem" value={image} updateValue={setImage} />
                </form>
            <button onClick={submit} className="btn-secondary">
                {isLoading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
        </div>
    </div>
    
    )
}