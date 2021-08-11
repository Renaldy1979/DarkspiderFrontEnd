import React, {
  useRef,
  useEffect,
  ReactNode,
  SelectHTMLAttributes,
  useState,
  useCallback,
} from 'react';

import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';
import { Container, Content, Error } from './styles/select';

interface SelectProps {
  name: string;
  label: string;
  children: ReactNode;
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & SelectProps;

export default function Select({ name, label, children, ...rest }: Props) {
  const selectRef = useRef<HTMLSelectElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      ref: selectRef,
      name: fieldName,
      getValue: ref => {
        return ref.current?.value;
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!selectRef.current?.value);
  }, []);

  return (
    <Container>
      {label && <span>{label}</span>}
      <Content isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
        <select
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          id={fieldName}
          ref={selectRef}
          defaultValue={defaultValue}
          {...rest}
        >
          {children}
        </select>

        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </Content>
    </Container>
  );
}
