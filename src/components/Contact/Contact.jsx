import css from './Contact.module.css';

import { ImUser, ImPhone, ImUserMinus } from 'react-icons/im';

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.container}>
      
      <p className={css.name}>
        <ImUser className={css.icon} />
        {name}
      </p>

      <p>
        <ImPhone className={css.icon} />
        {number}
      </p>

      <button className={css.button} onClick={() => onDelete(id)}>
        <ImUserMinus />
      </button>

    </div>
  );
};

export default Contact;