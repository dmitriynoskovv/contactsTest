import React from 'react';
import s from './ValidatedInput.module.css';

export const ValidatedInput = ({
  validator,
  setValue,
  value,
  label,
  helperText,
  placeholder,
  isRequired = false,
}) => {
  const [error, setError] = React.useState(false);
  return (
    <div className={s.input}>
      <section>
        <label>{label}</label>
        <input
          className={s.valid_input}
          value={value}
          required={isRequired}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.currentTarget.value);
            validator(e.currentTarget.value) ? setError(false) : setError(true);
          }}
        />
      </section>
      <div>{error && <div className={s.error}>{helperText}</div>}</div>
    </div>
  );
};
