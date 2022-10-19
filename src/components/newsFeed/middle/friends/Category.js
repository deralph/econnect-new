import React from "react";
import { handleInputs } from "../../../../extra/function";
import styles from "../../../../styles/newsFeed/friends.module.css";

const Category = ({ setcategory, form, setForm, setcategoryAdded }) => {
  const onCategoryChanged = (e) => {
    e.preventDefault();
    const { student, faculty, department } = form;
    if (student === "yes" && faculty && department) {
      setcategory(false);
      setcategoryAdded({ faculty, department });
    }
    if (student === "no" && !faculty && !department) {
      setcategory(false);
      setcategoryAdded({ faculty: "Non Student", department: "" });
    }
  };

  return (
    <section className={styles.category}>
      <div className={styles.catdiv}>
        <p className={styles.title}>Select Category</p>{" "}
        <form action="">
          {" "}
          <label className={styles.radio} htmlFor="student">
            <input
              id="student"
              name="student"
              type="radio"
              value="yes"
              onChange={(e) => handleInputs(e, setForm, form)}
              // checked={form.student === "yes"}
            />
            <p> Student</p>
          </label>
          {form.student === "yes" && (
            <div>
              <label htmlFor="faculty">
                Faculty
                <select
                  name="faculty"
                  value={form.faculty}
                  onChange={(e) => handleInputs(e, setForm, form)}
                >
                  <option value="">Choose Faculty</option>
                  <option value="science">Science</option>
                  <option value="Arts">Arts</option>
                  <option value="Education">Education</option>
                  <option value="Earth Science">Earth Science</option>
                </select>
              </label>
              <label htmlFor="department">
                Department
                <select
                  name="department"
                  value={form.department}
                  onChange={(e) => handleInputs(e, setForm, form)}
                >
                  <option value="">Choose Department</option>
                  <option value="science">English</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="History">History</option>
                  <option value="Geography">Geography</option>
                </select>
              </label>
            </div>
          )}
          <label className={styles.radio} htmlFor="student">
            <input
              id="student"
              name="student"
              type="radio"
              value="no"
              onChange={(e) => handleInputs(e, setForm, form)}
              // checked={form.student === "no"}
            />
            <p>Non Student</p>
          </label>
          <p>{form.student}</p>
          <button
            onClick={onCategoryChanged}
            disabled={
              !form.student ||
              (form.student === "yes" && (!form.faculty || !form.department))
            }
          >
            {" "}
            View Category
          </button>
        </form>
      </div>
    </section>
  );
};

export default Category;
