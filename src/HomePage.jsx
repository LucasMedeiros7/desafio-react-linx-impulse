import { Divisor } from './components/Divisor';
import { FormNewsLetter } from './components/FormNewsLetter';
import { Header } from './components/Header';
import { Product } from './components/Product';

import './global.css';

export function HomePage() {
  return (
    <main>
      <Header />
      <FormNewsLetter />
      <Divisor text="Sua seleção especial" />
      <Product />
    </main>
  );
}
