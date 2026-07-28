export type ContactFormState = {
  success: boolean;
  message: string;
  errors: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  values: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
};

export const initialContactFormState: ContactFormState = {
  success: false,
  message: "",
  errors: {},
  values: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
};
