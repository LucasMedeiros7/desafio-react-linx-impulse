import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Header } from './components/Header';
import { FormNewsLetter } from './components/FormNewsLetter';
import { Divisor } from './components/Divisor';
import { Product } from './components/Product';
import { FormShareWithFriends } from './components/FormShareWithFriends';
import { Footer } from './components/Footer';

import styles from './HomePage.module.css';

import './global.css';

export function HomePage() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [url, setUrl] = useState(
    'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'
  );

  async function fetchData(firstTimeLoadPage = false) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (firstTimeLoadPage) {
        setProducts([...data.products]);
      } else {
        setProducts(state => [...state, ...data.products]);
      }

      setUrl('https://' + data.nextPage);
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  }

  function handleLoadMoreProducts() {
    setIsFetching(true);
    fetchData();
  }

  useEffect(() => {
    fetchData(true);
  }, []);

  return (
    <main>
      <Header />
      <FormNewsLetter />
      <Divisor id="products" text="Sua seleção especial" />

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
