export const AUTH_VALIDATION_MESSAGES = {
  email: {
    required: 'Email is required',
    email: 'Please enter a valid email address',
  },

  password: {
    required: 'Password is required',
    minlength: 'Password must be at least 6 characters',
  },
} as const;

export const AUTH_SUBMIT_MESSAGES = {
  invalidCredentials: 'Invalid email or password',
  serverError: 'Something went wrong. Please try again.',
} as const;

export const AUTH_FORM = {
  passwordMinLength: 6,
} as const;

export const AUTH_UI = {
  login: {
    title: 'Restaurant Portal',
    subtitle: 'Log in to manage orders, menus, and stats.',
    submitButton: 'Login',
    loadingButton: 'Signing in...',
    emailLabel: 'Email Address',
    passwordLabel: 'Password',
  },
} as const;
