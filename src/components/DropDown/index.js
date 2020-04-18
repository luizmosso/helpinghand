import React, { useState } from 'react';
import { Select, Control, List, ListContent, ListItem } from './style'

function DropDown({ items, width, placeholder, controlClass, optionClass }) {

  const [selectedItem, setSelectedItem] = useState(null)
  const [shouldOpenList, setShouldOpenList] = useState(false)

  const isFirstItem = (items) => {
    if(selectedItem)
      return items.find(item => item.value === selectedItem.value && items.indexOf(item) === 0)
    else return false;
  }

  const onListItemClick = (item) => {
    setSelectedItem(item)
    setShouldOpenList(false)
  }

  return (
    <Select width={width}>
      <Control className={controlClass} usePlaceholder={!selectedItem} onClick={() => setShouldOpenList(!shouldOpenList)}>
        <p>{selectedItem ? selectedItem.label : placeholder}</p>
      </Control>
      {
        shouldOpenList &&
          <List firstItemSelected={isFirstItem(items)}>
            <ListContent>
              { 
                items && items.length > 0 && 
                items.map(item => 
                  <ListItem 
                    className={optionClass}
                    key={item.value}
                    value={item.value} 
                    onClick={() => onListItemClick(item)} 
                    selected={selectedItem && selectedItem.value === item.value}
                  >
                    {item.label}
                  </ListItem>)
              }
            </ListContent>
          </List>
      }
    </Select>
  );
}

export default DropDown;
