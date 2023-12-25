import { ChangeEventHandler } from 'react';

type StarProps = {
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function Star({ value, onChange }: StarProps) {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${value}`}
        type="radio"
        name="rating"
        value={value}
        onChange={onChange}
      />
      <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
    </>
  );
}
