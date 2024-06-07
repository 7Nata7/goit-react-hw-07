import './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactsList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import { selectError, selectIsLoading } from './redux/selectors';
import { fetchContacts } from './redux/contactsOps';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request is in progress</b>}
      <ContactsList />
    </div>
  );
}