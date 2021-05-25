import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  InputHTMLAttributes,
  SetStateAction,
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  onChangeValue: { [key: string]: string } => {};
}

export function EditInPlace({
  value,
  name,
  onChangeValue,
  ...rest
}: InputProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState({});

  const inputRef = useRef<HTMLInputElement>(null);

  const edit = useCallback(() => {
    setIsEditing(true);
    setEditValue({ [name]: value });
  }, [name, value]);

  const done = useCallback(() => {
    setEditValue({ [name]: inputRef.current?.value });
    onChangeValue(editValue);
    setIsEditing(false);
  }, [editValue, name, onChangeValue]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditing]);

  if (isEditing) {
    return (
      <input
        name={name}
        ref={inputRef}
        type="text"
        defaultValue={value}
        onBlur={done}
        {...rest}
      />
    );
  }

  return (
    <div onClick={edit} aria-hidden="true">
      {value}
    </div>
  );
}
