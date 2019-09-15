import Validator from 'validator';
import isEmpty from '../isEmpty/isEmpty';

const validateRegister = data => {
  let errors = {};

  // Check if Empty
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  // Validate Name
  if (!Validator.isLength(data.name, { min:2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }
  // Validate email
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  // Validate password
  if (!Validator.isLength(data.password, {min:6, max: 30})) {
    errors.password = 'Password must be at least 6 characters';
  }
  // Validate password to match password2
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }


  // Validate Empty
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required!'
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required!'
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required!'
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required!'
  }

  // Return errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateRegister;