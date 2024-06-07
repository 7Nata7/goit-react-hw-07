import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectVisibleContacts } from '../../redux/selectors';


export default function ContactsList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.contactsItem}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}