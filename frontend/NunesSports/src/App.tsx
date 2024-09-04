import { useState } from 'react';
import './App.css';
import { Card } from './components/card/card';
import { CreateModal } from './components/create-modal/create-modal';
import { useProductData } from './hooks/useProductData';
import { ProductData } from './interface/ProductData';
import { useDeleteProduct } from './hooks/useDeleteProduct';

const App = () => {
    const { data } = useProductData(); // Busca os produtos
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null); // Produto selecionado para edição
    const { mutate: deleteProduct } = useDeleteProduct(); // Mutação para deletar

    // Função para abrir o modal para novo produto
    const handleOpenModal = () => {
        setSelectedProduct(null); // Sem produto selecionado (criação)
        setIsModalOpen(true);
    };

    // Função para abrir o modal para edição de produto
    const handleEditProduct = (product: ProductData) => {
        setSelectedProduct(product); // Produto para edição
        setIsModalOpen(true);
    };

    // Função para deletar produto
    const handleDeleteProduct = (id: number) => {
        if (window.confirm('Tem certeza que deseja excluir este produto?')) {
            deleteProduct(id); // Deleta o produto
        }
    };

    return (
        <div className="container">
            <h1>Nunes Sports</h1>

            {/* Exibição dos produtos */}
            <div className="card-grid">
                {data?.map((product) => (
                    <Card
                        key={product.id}
                        product={product}
                        onEdit={() => handleEditProduct(product)}
                        onDelete={() => handleDeleteProduct(product.id!)}
                    />
                ))}
            </div>

            {/* Modal de criação/edição */}
            {isModalOpen && (
                <CreateModal
                    closeModal={() => setIsModalOpen(false)}
                    productData={selectedProduct} // Passa o produto para edição, se houver
                />
            )}

            {/* Botão para adicionar novo produto */}
            <button className="new-button" onClick={handleOpenModal}>Novo Produto</button>
        </div>
    );
};

export default App;
