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
    closeModal(): void;
    productData?: ProductData; // Usado para edição
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <div className="input-container">
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </div>
    )
}

export function CreateModal({ closeModal, productData }: ModalProps) {
    const [name, setName] = useState(productData?.name || "");
    const [price, setPrice] = useState(productData?.price || 0);
    const [image, setImage] = useState(productData?.image || "");
    const [description, setDescription] = useState(productData?.description || "");
    const { mutate, isSuccess, isLoading } = useProductDataMutate();

    const submit = () => {
        const product: ProductData = {
            id: productData?.id, // Incluímos ID apenas na edição
            name,
            price,
            image,
            description
        };
        mutate(product);
    };

    useEffect(() => {
        if (!isSuccess) return;
        closeModal(); // Fecha o modal após a operação
    }, [isSuccess]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>{productData ? "Editar Produto" : "Cadastrar Produto"}</h2>
                <form>
                    <Input label="Nome" value={name} updateValue={setName} />
                    <Input label="Descrição" value={description} updateValue={setDescription} />
                    <Input label="Preço" value={price} updateValue={setPrice} />
                    <Input label="URL da Imagem" value={image} updateValue={setImage} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'Salvando...' : productData ? "Atualizar" : "Cadastrar"}
                </button>
            </div>
        </div>
    );
}
