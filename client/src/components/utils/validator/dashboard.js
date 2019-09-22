import Validator from 'validator';
import isEmpty from '../isEmpty/isEmpty';

const validateDashboard = data => {
  let errors = {};

  // Check if Empty
  data = !isEmpty(data) ? data : '';

  // Validate Text
  if (!Validator.isLength(data, { min:2, max: 50 })) {
    errors.text = 'Textarea must be between 2 and 50 characters';
  }

  // Validate Empty
  if (Validator.isEmpty(data)) {
    errors.text = 'Textarea field is required!'
  }

  // Return errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateDashboard;