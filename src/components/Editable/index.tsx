import React, { useCallback, useEffect, useState } from 'react';
import { useCan } from '../../hooks/useCan';

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

  const useCanEditable = useCan({
    roles: ['ROLE_ADMIN'],
  });
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

  if (!useCanEditable) {
    return (
      <Container {...props}>
        <div aria-hidden="true" className={className}>
          {text || ''}
        </div>
      </Container>
    );
  }
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
