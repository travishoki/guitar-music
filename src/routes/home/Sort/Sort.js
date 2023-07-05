import React from 'react';
import { SORT_LIST } from '../../../const/sort';
import SideSCrollSelector from '../../../components/SideScrollSelector/SideScrollSelector';

const Sort = ({ currentOption, onClick }) => (
  <SideSCrollSelector
    currentOption={currentOption}
    list={SORT_LIST}
    onClick={onClick}
  />
);

export default Sort;
