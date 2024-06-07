import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={userSchema}
        onSubmit={(values, actions) => {
          dispatch(addContact(values));
          actions.resetForm();
        }}
      >
        <Form className={css.contactForm} autoComplete="off">
          <div className={css.formBox}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={css.fieldBox}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMsgForm}
            />
          </div>
          <div className={css.formBox}>
            <label htmlFor={phoneFieldId}>Phone</label>
            <Field
              className={css.fieldBox}
              type="text"
              name="phone"
              id={phoneFieldId}
            />
            <ErrorMessage
              name="phone"
              component="span"
              className={css.errorMsgForm}
            />
          </div>
          <button className={css.submitBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
