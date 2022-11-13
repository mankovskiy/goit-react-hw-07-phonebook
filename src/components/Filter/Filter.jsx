import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleSetFilterValue = e => {
    const value = e.target.value;
    console.log(value);

    dispatch(setFilterValue(value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleSetFilterValue}></input>
    </>
  );
};
