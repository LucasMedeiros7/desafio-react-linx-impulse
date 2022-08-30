import { Divisor } from './components/Divisor';
import { FormNewsLetter } from './components/FormNewsLetter';
import { Header } from './components/Header';
import { Product } from './components/Product';

import './global.css';

const products = [
  {
    id: 0,
    name: 'Product Number 0',
    image:
      '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158',
    oldPrice: 352,
    price: 323,
    description:
      'Product long description number 0 just to make more than one like of text.',
    installments: {
      count: 10,
      value: 32.3,
    },
  },
  {
    id: 1,
    name: 'Product Number 1',
    image:
      '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6747399',
    oldPrice: 378,
    price: 356,
    description:
      'Product long description number 1 just to make more than one like of text.',
    installments: {
      count: 10,
      value: 35.6,
    },
  },
  {
    id: 2,
    name: 'Product Number 2',
    image:
      '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829307',
    oldPrice: 101,
    price: 52,
    description:
      'Product long description number 2 just to make more than one like of text.',
    installments: {
      count: 10,
      value: 5.2,
    },
  },
  {
    id: 3,
    name: 'Product Number 3',
    image:
      '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=5783178',
    oldPrice: 439,
    price: 411,
    description:
      'Product long description number 3 just to make more than one like of text.',
    installments: {
      count: 10,
      value: 41.1,
    },
  },
  {
    id: 4,
    name: 'Product Number 4',
    image:
      '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6670538',
    oldPrice: 416,
    price: 376,
    description:
      'Product long description number 4 just to make more than one like of text.',
    installments: {
      count: 10,
      value: 37.6,
    },
  },
  {
    id: 5,
    name: 'Product Number 5',
    image:
      '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158',
    oldPrice: 313,
    price: 275,
    description:
      'Product long description number 5 just to make more than one like of text.',
    installments: {
      count: 10,
      value: 27.5,
    },
  },
  {
    id: 6,
    name: 'Product Number 6',
    image:
      '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158',
    oldPrice: 440,
    price: 404,
    description:
      'Product long description number 6 just to make more than one like of text.',
    installments: {
      count: 10,
      value: 40.4,
    },
  },
  {
    id: 7,
    name: 'Product Number 7',
    image:
      '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6747399',
    oldPrice: 366,
    price: 338,
    description:
      'Product long description number 7 just to make more than one like of text.',
    installments: {
      count: 10,
      value: 33.8,
    },
  },
];

export function HomePage() {
  return (
    <main>
      <Header />
      <FormNewsLetter />
      <Divisor text="Sua seleção especial" />
      <Product
        key={products[0].id}
        image={products[0].image}
        name={products[0].name}
        description={products[0].description}
        oldPrice={products[0].oldPrice}
        price={products[0].price}
        installments={products[0].installments}
      />
    </main>
  );
}
