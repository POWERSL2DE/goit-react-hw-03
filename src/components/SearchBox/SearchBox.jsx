import css from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = ({ value, onFilter }) => {
  const elementId = useId();

  return (
    <div className={css.container}>
      <label className={css.text} htmlFor={elementId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id={elementId}
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;