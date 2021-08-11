import React, { useRef, useState } from 'react';

import { IconBaseProps } from 'react-icons';
import { useHistory } from 'react-router-dom';
import useOnClickOutside from '../../hooks/useOnClickOutside';

interface DropdownProps {
  title: string;
  items: ItemProps[];
  multiSelect?: boolean;
}

interface ItemProps {
  id: string;
  title: string;
  path: string;
  icon: IconBaseProps;
  iconClosed?: IconBaseProps;
  iconOpened?: IconBaseProps;
  subNav?: SubNavParams[];
}

interface SubNavParams {
  id: string;
  title: string;
  path: string;
  icon: IconBaseProps;
  cName?: string;
}

function Dropdown({ title, items, multiSelect = false }: DropdownProps) {
  const ref = useRef(null);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState<ItemProps[]>([]);

  const handleClickOutside = () => {
    console.log('clicked outside');
  };

  function toggle() {
    setOpen(!open);
  }
  function handleOnClick(item: ItemProps) {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id,
      );
      setSelection([...selectionAfterRemoval]);
    }
    history.push(item.path);
  }

  function isItemInSelection(item: ItemProps) {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className="dd-wrapper" ref={ref}>
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle()}
        onClick={() => toggle()}
      >
        <div>
          <button type="button">
            <span>{title}</span>
            <span>{open ? 'Close' : 'Open'}</span>
          </button>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map(item => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.title}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// return (
//   <div className="dd-wrapper" ref={ref}>
//     {items.map(item => {
//       if (!item.child) {
//         return (
//           <button type="button" key={item.id}>
//             {item.icon}
//             <span>{item.title}</span>
//           </button>
//         );
//       }
//       return (
//         <>
//           <button type="button" key={item.id} onClick={() => toggle()}>
//             {item.icon}
//             <span>{item.title}</span>
//             <span>{open ? 'Close' : 'Open'}</span>
//           </button>
//           {open && (
//             <ul className="dd-list">
//               {item.child.map(subItem => (
//                 <li className="dd-list-item" key={subItem.id}>
//                   <button
//                     type="button"
//                     key={subItem.id}
//                     onClick={() => handleOnClick(subItem)}
//                   >
//                     <span>{subItem.title}</span>
//                     <span>{isItemInSelection(subItem) && 'Selected'}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </>
//       );
//     })}
//   </div>
// );

export default Dropdown;
