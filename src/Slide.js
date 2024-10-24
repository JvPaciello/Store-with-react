import React, { useEffect, useState } from "react";

function Slide() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchGuitarImage = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        const data = await response.json();

        console.log("Dados recebidos:", data);

        if (Array.isArray(data) && data.length > 0) {
          // Embaralha o array e pega 5 produtos aleatórios
          const randomProducts = data
            .sort(() => Math.random() - 0.5) // Embaralha a lista
            .slice(0, 5); // Pega os 5 primeiros itens

          setProducts(randomProducts);
        } else {
          console.warn("Nenhum produto encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchGuitarImage();
  }, []);

  return (
    <div className="container">
      <div className="images">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="img-container">
              <img src={product.images[0]} alt={product.name} />
              <button className="details-button">Details</button>
              <h1 className="details-h1">{product.name}</h1>
            </div>
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
      </div>
    </div>
  );
}

export default Slide;
