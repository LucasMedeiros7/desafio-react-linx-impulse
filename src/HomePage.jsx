import { FormNewsLetter } from './components/FormNewsLetter';
import { Header } from './components/Header';

import './global.css';

export function HomePage() {
  return (
    <div>
      <Header />
      <FormNewsLetter />
    </div>
  );
}
