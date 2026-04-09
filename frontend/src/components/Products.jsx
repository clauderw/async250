import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const name = localStorage.getItem("username") || 'User';

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-10 rounded-xl shadow-lg mb-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Products</h1>
              <p className="text-gray-500 mt-2">Welcome to Products page, {name}!</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/add-product')}
                className="bg-green-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-600"
              >
                Add Product
              </button>
              <button 
                onClick={() => navigate('/dashboard')}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600"
              >
                Dashboard
              </button>
            </div>
          </div>

          {products.length === 0 ? (
            <p className="text-lg text-gray-500 text-center">No products yet. Add one using the button above!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  {product.image && (
                    <img 
                      src={URL.createObjectURL(product.image)} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-green-600 mb-2">${parseFloat(product.price).toFixed(2)}</p>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center">
          <button 
            onClick={handleLogout}
            className="bg-red-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;

