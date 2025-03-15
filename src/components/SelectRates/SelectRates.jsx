import Select from 'react-select';

import symbols from './symbols.json';

import styles from './SelectRates.module.css';

import './ReactSelect.css';
import { useDispatch } from 'react-redux';
import { setBaseCurrensy } from '../../reduxState/currency/currencySlice';

const SelectRates = ({baseCurrency}) => {
  const dispatch = useDispatch()
const onChange = selectOption =>{
dispatch(setBaseCurrensy(selectOption.value))
}
  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        isSearchable
        options={symbols}
        onChange={onChange}
        value={{label: baseCurrency, value: baseCurrency}}
      />
    </div>
  );
};

export default SelectRates;
