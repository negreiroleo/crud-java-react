import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { useProductData } from './hooks/useProductData';
import { CreateModal } from './components/create-modal/create-modal';
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useProductData();

  const handleOpenModal = () => {
    console.log("Toggling modal. Current state:", isModalOpen);
    setIsModalOpen(prev => !prev);
  }

  return (
    <div className="container">
      <h1>Nunes Sports</h1>
      <div className="card-grid">
        {data?.map(productData => 
          <Card
            price={productData.price} 
            name={productData.name}
            description={productData.description} 
            image={productData.image}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
}

export default App;