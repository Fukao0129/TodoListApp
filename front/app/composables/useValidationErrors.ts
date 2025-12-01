export const useValidationErrors = () => {
  const validationErrorsStore = useValidationErrorsStore();

  const { clearErrorMessages, setErrorMessages } = validationErrorsStore;
  const validationErrors = storeToRefs(validationErrorsStore).errorMessages;

  return { validationErrors, clearErrorMessages, setErrorMessages };
};
