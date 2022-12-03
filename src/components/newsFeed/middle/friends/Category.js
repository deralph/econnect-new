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
    // <section className={styles.category}>
    <section className="absolute w-full h-full grid bg-black-300">
      <div className="bg-white w-3/5 h-auto m-auto z-20 py-[7%] px-[5%]">
        <p className="font-primary font-medium text-2xl text-primary pb-1 border-solid border-b-[0.5px] border-black-600">
          Select Category
        </p>{" "}
        <form action="" className="ml-[10%]">
          {" "}
          <label className="flex mt-4" htmlFor="student">
            <input
              id="student"
              name="student"
              type="radio"
              value="yes"
              onChange={(e) => handleInputs(e, setForm, form)}
              // checked={form.student === "yes"}
            />
            <p className="font-primary font-medium text-2xl ml-1 text-[rgba(50, 50, 50, 0.6)]">
              {" "}
              Student
            </p>
          </label>
          {form.student === "yes" && (
            <div>
              <label
                htmlFor="faculty"
                className="text-[rgba(50, 50, 50, 0.35)] text-base"
              >
                Faculty
                <select
                  name="faculty"
                  value={form.faculty}
                  onChange={(e) => handleInputs(e, setForm, form)}
                  className="border-[0.5px] border-solid border-[rgba(0, 0, 0, 0.35)] rounded-[2px] w-full mb-4 p-4"
                >
                  <option value="">Choose Faculty</option>
                  <option value="science">Science</option>
                  <option value="Arts">Arts</option>
                  <option value="Education">Education</option>
                  <option value="Earth Science">Earth Science</option>
                </select>
              </label>
              <label
                htmlFor="department"
                className="text-[rgba(50, 50, 50, 0.35)] text-base"
              >
                Department
                <select
                  name="department"
                  value={form.department}
                  onChange={(e) => handleInputs(e, setForm, form)}
                  className="border-[0.5px] border-solid border-[rgba(0, 0, 0, 0.35)] rounded-[2px] w-full mb-4 p-4"
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
          <label className="flex mt-4" htmlFor="student">
            <input
              id="student"
              name="student"
              type="radio"
              value="no"
              onChange={(e) => handleInputs(e, setForm, form)}
              // checked={form.student === "no"}
            />
            <p className="font-primary font-medium text-2xl ml-1 text-[rgba(50, 50, 50, 0.6)]">
              Non Student
            </p>
          </label>
          {/* <p>{form.student}</p> */}
          <button
            onClick={onCategoryChanged}
            disabled={
              !form.student ||
              (form.student === "yes" && (!form.faculty || !form.department))
            }
            className={`bg-primary rounded py-2 px-6 text-white mt-4 font-medium font-primary ${
              // disabled && "bg-[rgba(50,50,50,0.35)]"
              ""
            }`}
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
