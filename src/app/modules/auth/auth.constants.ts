export const AUTH_VALIDATION_MESSAGES = {
  EMAIL: {
    REQUIRED: 'Email is required',
    INVALID_EMAIL: 'Please enter a valid email address',
  },
  PASSWORD: {
    REQUIRED: 'Password is required',
    INVALID_PASSWORD: 'Password must be at least 6 characters',
  },
} as const;

export const AUTH_SUBMIT_MESSAGES = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  SERVER_ERROR: 'Something went wrong. Please try again.',
} as const;

export const AUTH_FORM = {
  PASSWORD_MINIMUM_LENGTH: 6,
} as const;

export const AUTH_ROUT = {
  LOGIN: 'login',
};
