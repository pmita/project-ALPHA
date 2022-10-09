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
    <main className="contact-page">
      <h2>Get a Quote</h2>
      <form className="query-form" onSubmit={handleSubmit(submitQuery)}>
        <section className="personal-details">
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
          </label>
        </section>
        {errors.lastName && <p className="form-error">{errors.lastName.message}</p>}
        {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}

        {/* Address Section */}
        <section className="address-details">
          <label>
            <span>Region</span>
            <input
              type="text"
              {...register('region', {
                minLength: { value: 2, message: 'First name must be at least 2 characters' },
                maxLength: { value: 25, message: 'First name must be less than 25 characters' },
                pattern: { value: /^[A-Za-z]+$/, message: 'First name must only contain letters' }
              })}
            />
          </label>
          <label>
            <span>Post Code</span>
            <input
              type="text"
              {...register('postCode', {
                required: { value: true, message: 'Post code is required' },
                pattern: { value: /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$/, message: 'Post code must be valid' }
              })}
            />
          </label>
        </section>
        {errors.region && <p className="form-error">{errors.region.message}</p>}
        {errors.postCode && <p className="form-error">{errors.postCode.message}</p>}

        {/* Job Details */}
        <section className="job-details">
          <label>
            <span>Description</span>
            <textarea
              type="text"
              {...register('jobInfo', {
                required: { value: true, message: 'Job description is required' },
                minLength: { value: 10, message: 'Job description must be at least 10 characters' },
                maxLength: { value: 750, message: 'Job description must be less than 750 characters' },
                pattern: { value: /^[a-zA-Z0-9_ ]*$/, message: 'Job description must only contain letters' }
              })}
              placeholder="What do you need done?"
            />
            {errors.jobInfo && <p className="form-error">{errors.jobInfo.message}</p>}
          </label>

        </section>
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
