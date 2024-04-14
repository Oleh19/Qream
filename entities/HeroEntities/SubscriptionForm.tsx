'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import validator from 'email-validator';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validator.validate(email)) {
      setIsValidEmail(false);
      return;
    }
    setIsValidEmail(true);
    setEmail('');
  };

  return (
    <div className='relative flex flex-1 items-start w-screen'>
      <form
        onSubmit={handleSubmit}
        className='absolute left-0 md:bottom-0 w-full flex justify-center pb-5'
      >
        <div className='flex-col'>
          <p className='bold-20'>
            Do you want to stay updated on the latest updates?
          </p>
          <div className='flex mt-2 '>
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={handleInputChange}
              className={`border rounded-l-lg p-3 w-[60%] md:w-96  focus:outline-none focus:none focus:border-green-50 ${
                isValidEmail ? '' : 'border-red-500 focus:border-red-500'
              }`}
            />
            <button
              type='submit'
              className={`bg-green-50 text-white px-4 py-3 rounded-r-lg focus:outline-none ${
                isValidEmail ? '' : 'bg-red-500'
              }`}
            >
              Subscribe
            </button>
          </div>
          {!isValidEmail && (
            <p className='text-red-500 mt-2'>
              Please enter a valid email address.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;
