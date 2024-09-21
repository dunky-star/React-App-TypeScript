import useForm from "./hooks/useForm";

const GoalsForm = () => {
  const { formValues, handleChanges, resetForm } = useForm("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(e.target[0].value);
    console.log(formValues);
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          value={formValues}
          id=""
          onChange={handleChanges}
        />
        <button>Add Goals</button>
      </form>
    </div>
  );
};

export default GoalsForm;
