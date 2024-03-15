// validation.js

// Define the validation rules and error messages
const validationRules = {
    required: {
      validate: value => value !== '',
      message: 'This field is required.',
    },
    minLength: {
      validate: (value, minLength) => value.length >= minLength,
      message: minLength => `Minimum length should be ${minLength}.`,
    },
    maxLength: {
      validate: (value, maxLength) => value.length <= maxLength,
      message: maxLength => `Maximum length should be ${maxLength}.`,
    },
    isEmail: {
      validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Invalid email address.',
    },
    isNumeric: {
      validate: value => /^\d+$/.test(value),
      message: 'Only numeric characters are allowed.',
    },
    isAlphaNumeric: {
      validate: value => /^[a-zA-Z0-9]+$/.test(value),
      message: 'Only alphanumeric characters are allowed.',
    },
  };
  
  // Validation function
  function validate(data, rules) {
    const errors = {};
  
    Object.entries(rules).forEach(([field, fieldRules]) => {
      fieldRules.forEach(rule => {
        const { type, params } = rule;
        const { validate, message } = validationRules[type];
  
        if (!validate(data[field], ...params)) {
          errors[field] = message(...params);
        }
      });
    });
  
    return errors;
  }
  
  // Export the validate function
  module.exports = validate;
  