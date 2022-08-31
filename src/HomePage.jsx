import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Header } from './components/Header';
import { FormNewsLetter } from './components/FormNewsLetter';
import { Divisor } from './components/Divisor';
import { Product } from './components/Product';

import styles from './HomePage.module.css';

import './global.css';
import { FormShareWithFriends } from './components/FormShareWithFriends';
import { Footer } from './components/Footer';

const url = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products';

export function HomePage() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [requestCount, setRequestCount] = useState(1);

  async function fetchData(firstTimeLoadPage = false) {
    const response = await fetch(`${url}?page=${requestCount}`);
    const data = await response.json();

    setRequestCount(requestCount + 2);

    if (firstTimeLoadPage) {
      setProducts(data.products);
      setIsFetching(false);
    } else {
      setProducts(state => [...state, ...data.products]);
    }
  }

  function handleLoadMoreProducts() {
    setIsFetching(true);

    setTimeout(() => {
      setIsFetching(false);
    }, 800); // Simular uma demora na requisição

    fetchData();
  }

  useEffect(() => {
    fetchData(true);
  }, []);

  return (
    <main>
      <Header />
      <FormNewsLetter />
      <Divisor text="Sua seleção especial" />

      <div className={styles.wrapper}>
        {products?.map(product => {
          return (
            <Product
              key={uuid()}
              image={product.image}
              name={product.name}
              description={product.description}
              oldPrice={product.oldPrice}
              price={product.price}
              installments={product.installments}
            />
          );
        })}

        {isFetching && <p>Carregando...</p>}
      </div>

      <button onClick={handleLoadMoreProducts} className={styles.btn}>
        Ainda mais produtos aqui!
      </button>

      <Divisor text="Compartilhe novidade" />

      <FormShareWithFriends />

      <Footer />
    </main>
  );
}
