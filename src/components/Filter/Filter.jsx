import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { changeFilter } from '../../reduxState/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch()
  const onChange = e =>{
    dispatch(changeFilter(e.target.value.trim().toLowerCase()))
  }
  return (
    <input
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
      onChange={onChange}
    />
  );
};

export default Filter;
