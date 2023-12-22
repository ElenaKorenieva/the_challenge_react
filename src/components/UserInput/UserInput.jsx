import { useState } from "react";
import s from "./UserInput.module.scss";

const UserInput = ({ handleSubmit }) => {
  const [userSearch, setuserSearch] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setuserSearch(value);
  };

  const resetForm = () => {
    setuserSearch("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(userSearch);
    resetForm();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className={s.userSearchForm}>
        <input
          className={s.userSearch}
          name="title"
          type="text"
          placeholder="Search request..."
          onChange={handleChange}
          value={userSearch}
        />

        <button type="submit" className={s.submitButton}>
          Search
        </button>
      </form>
    </>
  );
};

export default UserInput;
