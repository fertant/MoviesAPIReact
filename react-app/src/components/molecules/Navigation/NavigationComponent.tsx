import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  MainNavbarWrapper,
  ListWrapper,
  ListItem,
  SeparatedLine,
  ManagePanelWrapper,
} from './Navigation';
import { INavigation, IMenuItem } from './INavigation';
import SortFilterComponent from '../SortFilter/SortFilterComponent';
import { actionSetFilter } from '../../../actions/Actions';

const NavigationComponent: FunctionComponent<INavigation> = ({ filters }) => {
  const [selectedTab, setActiveTab] = useState(filters[0].title);
  const dispatch = useDispatch();
  const onFilter = (item: string) => {
    setActiveTab(item);
    dispatch(actionSetFilter('movieType', item));
  };

  return (
    <MainNavbarWrapper>
      <ManagePanelWrapper>
        <ListWrapper>
          {filters?.map((item: IMenuItem) => (
            <ListItem key={item.title}
                      active={selectedTab === item.title}
                      onClick={() => onFilter(item.title)}>
              {item.title}
            </ListItem>
          ))}
        </ListWrapper>
        <SortFilterComponent label={'Sort by'}
                          selected={{key: 'releasedate', value: 'release date'}}
                          items={[
                            {key: 'yearOfRelease', value: 'release date'},
                            {key: 'title', value: 'title'},
                          ]}/>
      </ManagePanelWrapper>
      <SeparatedLine />
    </MainNavbarWrapper>
  );
};

export default NavigationComponent;
