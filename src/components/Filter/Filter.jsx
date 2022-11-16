import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/operations';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleSetFilterValue = e => {
    const value = e.target.value;

    dispatch(setFilterValue(value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleSetFilterValue}></input>
    </>
  );
};
