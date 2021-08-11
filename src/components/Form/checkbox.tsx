import React, { useEffect, useRef, InputHTMLAttributes } from 'react';

import { useField } from '@unform/core';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: {
    id: string;
    name: string;
    description: string;
  }[];
}

export function Checkbox({ name, options, ...rest }: Props) {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = [] } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter(ref => ref.checked).map(ref => ref.value);
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach(ref => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach(ref => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <div className="checkbox-container">
      {options.map((option, index) => (
        <label htmlFor={option.id} key={option.id}>
          <input
            name={fieldName}
            defaultChecked={defaultValue.includes(option.id)}
            ref={ref => {
              inputRefs.current[index] = ref as HTMLInputElement;
            }}
            value={option.id}
            type="checkbox"
            id={option.id}
            {...rest}
          />
          {option.description}
        </label>
      ))}
    </div>
  );
}

export default Checkbox;
