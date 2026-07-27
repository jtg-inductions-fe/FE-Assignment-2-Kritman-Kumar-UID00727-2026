export const RESTAURANT_FORM = {
  NAME_MINIMUM_LENGTH: 2,
  ADDRESS_MINIMUM_LENGTH: 5,
} as const;

export const RESTAURANT_VALIDATION_MESSAGES = {
  NAME: {
    REQUIRED: 'Restaurant name is required.',
    MINIMUM_LENGTH: `Restaurant name must be at least ${RESTAURANT_FORM.NAME_MINIMUM_LENGTH} characters.`,
  },
  ADDRESS: {
    REQUIRED: 'Address is required.',
    MINIMUM_LENGTH: `Address must be at least ${RESTAURANT_FORM.NAME_MINIMUM_LENGTH} characters.`,
  },
  OWNER: {
    REQUIRED: 'At least one owner email is required.',
  },
} as const;
