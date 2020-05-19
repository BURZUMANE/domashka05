import React from 'react';

export default function SubmitButton({ onSubmit }) {
  return (
    <button onSubmit={onSubmit} type="submit">
      Add contact
    </button>
  );
}
