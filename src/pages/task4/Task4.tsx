import { useEffect, useState } from "react";

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  code: string;
  metalType: string;
  metalColor: string;
  stoneShape: string;
  gemstoneColor: string;
  price: string
}

export const Task4 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const URL = 'https://yaroslavkolbaiev.github.io/personal_server/products/products.json';
  
  function getProducts() {
    return fetch(URL)
      .then(res => res.json())
      .then(resDecoded => window.atob(resDecoded))
  };

  const fetchProducts = async () => {
    const res = await getProducts();

    setProducts(JSON.parse(res))
  }

  useEffect(() => {
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Task 4</h1>
        <div className="content">
          <p>Write script that displays a list of products from server response data.</p>
          <p>Request method: GET</p>
          <p>Server returns encoded JSON string in base64</p>
        </div>
        <hr />
      <div className="columns is-mobile">
        {products.map(product => (
          <div 
            key={product.id}
            className="column"
          >
            <div className="card">
              <header className="card-header is-flex is-flex-direction-column">
                <p className="has-text-centered">{`#${product.id}`}</p>
                <p className="has-text-centered">{product.name}</p>
                <p className="has-text-centered">{product.code}</p>
              </header>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={product.imageUrl} alt="RingPic" />
                </figure>
              </div>
              <div className="card-content">
                <p className="has-text-weight-bold has-text-centered">Product options:</p>
                <p>{`Metal Type: ${product.metalType}`}</p>
                <p>{`Metal Color: ${product.metalColor}`}</p>
                <p>{`Stone Shape: ${product.stoneShape}`}</p>
                <p>{`Gemstone color: ${product.gemstoneColor}`}</p>
                <p className="is-size-3 has-text-weight-bold has-text-centered">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
      </div>
    </div>
  )
}