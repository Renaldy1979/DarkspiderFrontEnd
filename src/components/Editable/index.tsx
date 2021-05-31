import React, { useCallback, useEffect, useState } from 'react';

import { Container } from './styles';

export function Editable({
  text,
  type,
  children,
  childRef,
  className,
  ...props
}) {
  const [isEditing, setEditing] = useState(false);

  const edit = useCallback(() => {
    setEditing(true);
  }, []);

  const done = useCallback(() => {
    setEditing(false);
  }, []);

  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  const handleKeyDown = event => {
    const { key } = event;
    const keys = ['Escape', 'Tab'];
    const enterKey = 'Enter';
    const allKeys = [...keys, enterKey];
    if (
      (type === 'textarea' && keys.indexOf(key) > -1) ||
      (type !== 'textarea' && allKeys.indexOf(key) > -1)
    ) {
      setEditing(false);
    }
  };

  return (
    <Container {...props}>
      {isEditing ? (
        <div onBlur={done} onKeyDown={e => handleKeyDown(e)} aria-hidden="true">
          {children}
        </div>
      ) : (
        <div onClick={edit} aria-hidden="true" className={className}>
          {text || ''}
        </div>
      )}
    </Container>
  );
}

export default Editable;
