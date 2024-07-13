import { useId } from 'react';
import css from './ContactForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required field'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required field'),
});

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={{ id: '', name: '', number: '' }}
      onSubmit={(values, actions) => {
        const newContact = {
          id: nanoid(5),
          name: values.name,
          number: values.number,
        };
        onAdd(newContact);
        actions.resetForm();
      }}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="p" />
        </div>

        <div className={css.field}>
          <label className={css.label} htmlFor={numberId}>
            Number
          </label>
          <Field type="text" name="number" id={numberId} />
          <ErrorMessage className={css.error} name="number" component="p" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;