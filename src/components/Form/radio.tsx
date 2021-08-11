import React, { useEffect, useRef, InputHTMLAttributes } from 'react';

import { useField } from '@unform/core';

interface Props {
  name: string;
  label?: string;
  options: {
    id: string;
    name: string;
    description: string;
  }[];
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

export function Radio({ name, label, options, ...rest }: InputProps) {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.find(ref => ref.checked)?.value || '';
      },
      setValue: (refs: HTMLInputElement[], id: string) => {
        const inputRef = refs.find(ref => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs: HTMLInputElement[]) => {
        const inputRef = refs.find(ref => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [fieldName, registerField]);

  return (
    <div className="radio-container">
      {label && <p>{label}</p>}
      {options.map((option, index) => (
        <label htmlFor={option.id} key={option.id}>
          <input
            type="radio"
            ref={ref => {
              inputRefs.current[index] = ref as HTMLInputElement;
            }}
            id={option.id}
            name={fieldName}
            defaultChecked={defaultValue.includes(option.id)}
            value={option.id}
            {...rest}
          />
          {option.description}
        </label>
      ))}
      {error && <span>{error}</span>}
    </div>
  );
}
export default Radio;
