import { useState } from 'react';
// LIBRARIES
import { useForm } from 'react-hook-form';
// FIREBASE
import { firestore, timeStamp } from '../../firebase/config';
// STYLES
import './style.scss';

function Contact() {
  // STATE & VARIABLES
  const [isPending, setIsPending] = useState(false);
  const [requestError, setRequestError] = useState(null);
  const {
    register, handleSubmit, formState: { errors }, reset
  } = useForm({ mode: 'onChange' });

  // EVENTS
  const submitQuery = async ({ firstName, lastName, jobInfo }) => {
    try {
      setIsPending(true);
      setRequestError(null);
      await firestore.collection('queries').add({
        firstName,
        lastName,
        jobInfo,
        createdAt: timeStamp(),
        updatedAt: timeStamp()
      });
      reset({ firstName: '', lastName: '', jobInfo: '' });
    } catch (err) {
      setIsPending(false);
      setRequestError(err.message);
    }
  };
  return (
    <main className="query-form">
      <h2>Get a Quote</h2>
      <form className="query-form" onSubmit={handleSubmit(submitQuery)}>
        <label>
          <span>First Name</span>
          <input
            type="text"
            {...register('firstName', {
              required: { value: true, message: 'First name is required' },
              minLength: { value: 2, message: 'First name must be at least 2 characters' },
              maxLength: { value: 25, message: 'First name must be less than 25 characters' },
              pattern: { value: /^[A-Za-z]+$/, message: 'First name must only contain letters' }
            })}
          />
          {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}
        </label>
        <label>
          <span>Last Name</span>
          <input
            type="text"
            {...register('lastName', {
              required: { value: true, message: 'Last name is required' },
              minLength: { value: 2, message: 'Last name must be at least 2 characters' },
              maxLength: { value: 25, message: 'Last name must be less than 25 characters' },
              pattern: { value: /^[A-Za-z]+$/, message: 'Last name must only contain letters' }
            })}
          />
          {errors.lastName && <p className="form-error">{errors.lastName.message}</p>}
        </label>
        <label>
          <span>Give us some info for the job</span>
          <textarea
            type="text"
            {...register('jobInfo')}
          />
          {errors.jobInfo && <p className="form-error">{errors.jobInfo.message}</p>}
        </label>
        <button type="submit" className="btn highlight">
          Submit
          {' '}
          {isPending}
        </button>
      </form>
      {requestError && <p className="error">{requestError}</p>}
    </main>
  );
}

export default Contact;
