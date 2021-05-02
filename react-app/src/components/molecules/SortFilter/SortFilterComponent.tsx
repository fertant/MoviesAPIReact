import React, { FunctionComponent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import { ISelectProps, ISelectItem } from './ISortFilter';
import {
  SelectWrapper,
  SelectedOption,
  SelectListWrapper,
  SelectListItem,
} from './SortFilter';
import { actionSetFilter } from '../../../actions/Actions';

// PATTERN: render prop
const SortFilterComponent: FunctionComponent<ISelectProps> = ({
  label = 'label',
  items,
  selected,
}) => {
  const [opened, setOpenState] = useState(false);
  const [selectedItem, setSelected] = useState(selected);
  const dispatch = useDispatch();
  const onFilter = (item: ISelectItem) => {
    setSelected(item);
    dispatch(actionSetFilter('movieSort', item.key));
  };

  return (
    <SelectWrapper onClick = {() => setOpenState(!opened)}>
      <label>{label}</label>
      <SelectedOption>{selectedItem.value}</SelectedOption>
      <FontAwesomeIcon
        icon={opened ? faCaretUp : faCaretDown}
        className="selector-caret"
      />
      <SelectListWrapper status={opened}>
        {
          items
            .filter((item: ISelectItem) => item.key !== selectedItem?.key)
            .map((item: ISelectItem) => (
              <SelectListItem
                key={item.key}
                onClick={() => onFilter(item)}
              >
                {item.value}
              </SelectListItem>
            ))
        }
      </SelectListWrapper>
    </SelectWrapper>
  );
};

export default SortFilterComponent;
