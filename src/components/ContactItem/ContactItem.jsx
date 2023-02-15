import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li key={id} className={s.item}>
    <p>{name}:</p>
    <p>{number}</p>
    <button
      className={s.button}
      type="submit"
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
