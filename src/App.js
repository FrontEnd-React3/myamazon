import { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, title: "black sneakers", quantity: 1 },
    { id: 2, title: "red sneakers", quantity: 1 },
    { id: 3, title: "blue sneakers", quantity: 1 },
  ]);
  const [selectedID, setSelectedID] = useState(null);
  const selectedProduct = products.find((p) => p.id === selectedID);
  const allProduct = products.length;
  const allboughtProduct = products.quantity;

  let total = 0;
  for (const oneproduct of products) {
    const productTotal = oneproduct.quantity;
    total = total + productTotal;
  }

  const increment = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return {
            ...product, quantity: product.quantity + 1
          };
        } else return product;
      });
    });
  };
  const nullimit = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.quantity <= 0) {
          return {
            ...product, quantity: product.quantity === 0
          };
        } else return product;
      });
    });
  };
  const decrement = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return {
            ...product, quantity: product.quantity - 1
          };
        } else return product;
      });
    });
  };
  const handleChoose = (id) => {
    const product = products.find((p) => p.id === id);
    // setSelectedProduct(product)
    setSelectedID(id)
  }
  return (
    <div className="App">
      <h4>All Products:</h4>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.title}
            <button onClick={() => handleChoose(product.id)}>select product</button>
          </span>
          <div className="quantity">
            {product.quantity >= 1 ? <button onClick={() => (decrement(product.id))}>-</button> : <button id="redbtn">-</button>}
            <span>{product.quantity} </span>
            <button onClick={() => increment(product.id)}>+</button>

          </div>
        </div>

      ))}

      <h4>Selected Product:</h4>
      <span>{selectedProduct?.title}</span>
      <span>{selectedProduct?.quantity}
      </span>
      <h4>Total of products:</h4>
      <span>{allProduct} different products</span>
      <span>{total}  products bought
      </span>

    </div>
  );
};



export default App;
