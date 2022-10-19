export const handleInputs = (e, setForm, form) => {
  //   e.preventDefault();
  const name = e.target.name;
  const value = e.target.value;
  setForm({
    ...form,
    [name]: value,
  });
};
