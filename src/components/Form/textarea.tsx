import React, {
  useRef,
  useEffect,
  TextareaHTMLAttributes,
  useCallback,
  useState,
} from 'react';

import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Content, Error } from './styles/textarea';

interface Props {
  name: string;
  label?: string;
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Props;

export default function Textarea({ name, label, ...rest }: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef,
      getValue: ref => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
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
    setIsFilled(!!textareaRef.current?.value);
  }, []);

  return (
    <Container>
      {label && <span>{label}</span>}
      <Content isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
        <textarea
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={textareaRef}
          id={fieldName}
          defaultValue={defaultValue}
          {...rest}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </Content>
    </Container>
  );
}
