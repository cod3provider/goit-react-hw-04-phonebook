import PropTypes from 'prop-types';

import s from './ContactFilter.module.css';

const ContactFilter = ({ value, handleChange }) => {
  return (
    <div className={s.filter}>
      <label >Find contacts by name
        <input
          name="filter"
          type="text"
          value={value}
          onChange={handleChange}
          className={s.input}
        />
      </label>
    </div>
  )
}

export default ContactFilter;

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
