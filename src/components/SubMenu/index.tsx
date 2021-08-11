import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IconBaseProps } from 'react-icons';
import { DropdownLink, SidebarLabel, SidebarLink } from './styles';

interface SubMenuParams {
  data: ItemProps[];
}

interface ItemProps {
  id: string;
  title: string;
  path: string;
  icon: IconBaseProps;
  iconClosed?: IconBaseProps;
  iconOpened?: IconBaseProps;
  subNav?: SubNavParams[];
  cName: string;
}
interface SubNavParams {
  id: string;
  title: string;
  path: string;
  icon: IconBaseProps;
  cName: string;
}

interface OpenProps {
  id: string;
  isOpen: boolean;
}
function SubMenu({ data }: SubMenuParams) {
  const history = useHistory();
  const [open, setOpen] = useState<OpenProps[]>([]);
  // const [selection, setSelection] = useState<string>('initial');

  useEffect(() => {
    const startData = data;
    startData
      .filter(d => d.subNav?.length)
      .map(i =>
        setOpen(prevState => [...prevState, { id: i.id, isOpen: false }]),
      );
  }, [data]);

  const handleOnClick = useCallback(
    (
      id: string,
      path: string,
      hasSubMenu: boolean,
      firstLevel: boolean,
      cName: string,
    ) => {
      console.log(hasSubMenu, firstLevel);
      if (!hasSubMenu && firstLevel) {
        const closeAllSubmenu = open.map(i => {
          i.isOpen = false;
          return i;
        });
        setOpen(closeAllSubmenu);
        localStorage.setItem('@DarkSpider:selection', cName);
        // setSelection(cName);
        history.push(path);
      } else if (hasSubMenu && firstLevel) {
        const openAfterRemoval = open.map(element => {
          if (element.id === id) {
            element.isOpen = !element.isOpen;
          } else {
            element.isOpen = false;
          }
          return element;
        });
        setOpen(openAfterRemoval);
      } else {
        // setSelection(cName);
        localStorage.setItem('@DarkSpider:selection', cName);
        history.push(path);
      }
    },
    [history, open],
  );

  const selection = localStorage.getItem('@DarkSpider:selection');
  return (
    <>
      {data.map(item => {
        const hasSubMenu = !!item.subNav?.length;

        return (
          <div key={item.id}>
            <SidebarLink
              key={item.id}
              onClick={() =>
                handleOnClick(item.id, item.path, hasSubMenu, true, item.cName)
              }
              active={selection === item.cName}
              // to={hasSubMenu ? '#' : item.path}
            >
              <div>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </div>
              <div>
                {item.subNav &&
                open.some(o => o.id === item.id && o.isOpen === true)
                  ? item.iconOpened
                  : item.iconClosed}
              </div>
            </SidebarLink>
            {open.some(o => o.id === item.id && o.isOpen === true) &&
              item.subNav?.map(subItem => {
                return (
                  <DropdownLink
                    key={subItem.id}
                    onClick={() =>
                      handleOnClick(
                        subItem.id,
                        subItem.path,
                        false,
                        false,
                        subItem.cName,
                      )
                    }
                    active={selection === subItem.cName}
                    // to={subItem.path}
                  >
                    {subItem.icon}
                    <SidebarLabel>{subItem.title}</SidebarLabel>
                  </DropdownLink>
                );
              })}
          </div>
        );
      })}
    </>
  );
}

export default SubMenu;
