// Deze app werkt met de volgende files: App.jsx, SignIn.jsx
// https://www.npmjs.com/package/react-hook-form
// https://react-hook-form.com/get-started/
// Registreren. Zie pattern bij Password: https://www.freecodecamp.org/news/add-form-validation-in-react-app-with-react-hook-form/

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputComponent from '../../components/input/InputComponent';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './SignIn.css';

export default function SignIn() {
  const [success, setSuccess] = useState(false);

  const {
    reset,
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm({
    mode: 'onChange',
    defaultValues: {},
  });

  function handleFormSubmit(data) {
    console.table(data);
    console.table('Email: ', data.email);
    setSuccess(true);
    reset();
  }

  return (
    <>
      <section className="outer-container">
        <div className="inner-container">
          <h1>Sign In</h1>

          {success ? (
            <p style={{ color: 'green' }}>
              You have successfully logged in
            </p>
          ) : (
            <p>Sign in for existing users</p>
          )}

          <form
            className="signin-form"
            name="signin-form"
            id="signin-form"
            method="POST"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <input type="hidden" name="form-name" value="signinForm" />
            {/* E-mail component*/}
            <InputComponent
              iconName={faEnvelope}
              inputType="text"
              inputName="email"
              inputId="email-field"
              placeholder="E-mail"
              validationRules={{
                required: 'This field is required',
                pattern: {
                  value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
                  message: 'Enter a valid e-mail address',
                },
              }}
              register={register}
              errors={errors}
              autoFocus
            />

            {/* Password component*/}
            <InputComponent
              iconName={faLock}
              inputType="password"
              inputName="password"
              inputId="password-field"
              placeholder="Password"
              validationRules={{
                required: 'This field is required',
              }}
              register={register}
              errors={errors}
            />

            <button
              type="submit"
              title="Verstuur het formulier"
              disabled={!isValid}
            >
              Sign In
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
