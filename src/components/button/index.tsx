import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export default function Button({ children, loading, ...rest }: ButtonProps) {
  return (
    <Container>
      <button type="button" {...rest}>
        {loading ? 'CARREGANDO...' : children}
      </button>
    </Container>
  );
}
