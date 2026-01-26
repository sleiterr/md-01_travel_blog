import React, { useState, useEffect } from "react";

const FormField = ({ value, onChange }) => {
  return (
    <>
      <p className="font-normal text-base mb-1 text-gray-500">Review</p>
      <label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Skriv din anmeldelse her..."
          className="w-full h-62 border rounded p-2 text-gray-600"
        />
      </label>
    </>
  );
};

export default FormField;
