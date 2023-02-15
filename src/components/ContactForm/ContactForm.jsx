import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  // const [state, setState] = useState({
  //   name: '',
  //   number: '',
  // });

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  /*
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setState({
      name: '',
      number: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const { name, number } = state;
  */

  return (
    <div className={s.wrap}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            // onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={s.input}
          />
        </label>

        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            // onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={s.input}
          />
        </label>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
