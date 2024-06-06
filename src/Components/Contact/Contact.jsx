import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact: { id, name, phone } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <p>
          <IoMdPerson className={css.contactIcon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.contactIcon} />
          {phone}
        </p>
      </div>
      <button type="button" className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}