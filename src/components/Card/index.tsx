import React, { ReactNode, useState } from 'react';

import {
  Container,
  Header,
  Body,
  Footer,
  ButtonNewItem,
  ArrowDownButton,
  ArrowUpButton,
} from './styles';

interface CardProps {
  title?: string;
  header?: ReactNode;
  surTitle?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  hasStyle?: boolean;
  buttonNew?: string;
  onClickNewItem?: () => {};
  toggle?: boolean;
  top?: boolean;
}

export function Card({
  title,
  surTitle,
  children,
  footer,
  hasStyle,
  onClickNewItem,
  toggle = false,
  top = false,
  header,
  ...rest
}: CardProps) {
  const [open, setOpen] = useState(true);

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <Container top={top} {...rest}>
      <Header hasStyle={hasStyle}>
        {header || (
          <div className="control-titles">
            {title && <h4>{title}</h4>}
            {surTitle && <h6 className="surtitle">{surTitle}</h6>}
          </div>
        )}

        <div className="control-buttons">
          {Boolean(onClickNewItem) && (
            <button type="button" onClick={onClickNewItem}>
              <ButtonNewItem />
            </button>
          )}
          {toggle && (
            <button type="button" onClick={handleOpen}>
              {open ? <ArrowUpButton /> : <ArrowDownButton />}
            </button>
          )}
        </div>
      </Header>
      {open && <Body>{children}</Body>}
      {open && footer && (
        <Footer>
          <h1>{footer}</h1>
        </Footer>
      )}
    </Container>
  );
}

export default Card;
