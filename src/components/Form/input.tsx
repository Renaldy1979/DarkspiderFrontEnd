import React, {
  useRef,
  useEffect,
  InputHTMLAttributes,
  useCallback,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Content, Error } from './styles/input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?:
    | 'text'
    | 'number'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'hidden'
    | 'month'
    | 'password'
    | 'time'
    | 'range'
    | 'search'
    | 'tel'
    | 'url'
    | 'week';
  label?: string;
  value?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export default function Input({
  name,
  type,
  label,
  value,
  icon: Icon,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const defaultInputValue = value || defaultValue;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value;
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
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return type !== 'hidden' ? (
    <Container>
      {label && <span>{label}</span>}
      <Content isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
        {Icon && <Icon size={20} />}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          type={type || 'text'}
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultInputValue}
          {...rest}
        />

        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </Content>
    </Container>
  ) : (
    <input
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      type={type || 'text'}
      id={fieldName}
      ref={inputRef}
      defaultValue={defaultInputValue}
      {...rest}
    />
  );
}
