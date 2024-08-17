export const validateForm = (values: any) => {
    const errors: any = {};

    if (!values.name) {
        errors.name = 'Name is required';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    }

    return errors;
};
