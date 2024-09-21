import { useState } from "react";

const useForm = (initialValue) => {
  const [formValues, setFormValues] = useState(initialValue);

  const handleChanges = (change) => {
    setFormValues(() => change.target.value);
  };

  const resetForm = () => setFormValues("");

  return { formValues, handleChanges, resetForm };
};

export default useForm;
