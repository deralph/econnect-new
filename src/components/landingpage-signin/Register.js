import React, { useState } from "react";
import styles from "../../styles/signin.module.css";
import { handleInputs } from "../../extra/function";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    student: "",
    idNo: "",
    email: "",
    phoneNo: "",
    password: "",
    repeatPass: "",
  });

  return (
    // <section className={styles.section}>
    <section>
      {" "}
      <img
        src="/econnectLogo.png"
        alt="econnect logo"
        className="absolute top-5 left-[5%]"
      />
      <article className="flex justify-between items-center pt-[8%] pr-[5%] pb-[5%] pl-[7%]">
        <form action="">
          <h1 className="text-secondary text-xl mb-4">Register</h1>
          <label
            className="pt-5 text-primary text-[0.8em] capitalize"
            htmlFor="full name"
          >
            fullname
          </label>
          <input
            className="block outline-none w-full py-1 px-3 mt-1 mb-4  border-[0.53px] border-solid border-[rgba(0, 0, 0, 0.3)]"
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={(e) => handleInputs(e, setForm, form)}
          />
          <div>
            <p>are you a student?</p>
            <div
              className="radios"
              onChange={(e) => handleInputs(e, setForm, form)}
              name="student"
            >
              <label className="inline-flex items-baseline justify-center w-auto text-blask mr-3 p-0">
                <input
                  className="block outline-none w-full py-1 px-3 mt-1 mb-4  border-[0.53px] border-solid border-[rgba(0, 0, 0, 0.3)] mr-2"
                  id="student"
                  name="student"
                  type="radio"
                  value="yes"
                  // checked={form.student === "yes"}
                />
                Yes
              </label>
              <label className="inline-flex items-baseline justify-center w-auto text-blask mr-3 p-0">
                <input
                  className="
                  mr-2 outline-none w-full py-1 px-3 mt-1 mb-4  border-[0.53px] border-solid border-[rgba(0, 0, 0, 0.3)]"
                  id="student"
                  name="student"
                  type="radio"
                  value="no"
                  // checked={form.student === "no"}
                />
                No
              </label>
            </div>
          </div>
          <label
            className="pt-5 text-primary text-[0.8em] capitalize"
            htmlFor="id no."
          >
            Matric/Jamb/Part-Time Number
          </label>
          <input
            className="block outline-none w-full py-1 px-3 mt-1 mb-4  border-[0.53px] border-solid border-[rgba(0, 0, 0, 0.3)]"
            type="text"
            name="idNo"
            value={form.idNo}
            onChange={(e) => handleInputs(e, setForm, form)}
          />
          <label
            className="pt-5 text-primary text-[0.8em] capitalize"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            className="block outline-none w-full py-1 px-3 mt-1 mb-4  border-[0.53px] border-solid border-[rgba(0, 0, 0, 0.3)]"
            type="text"
            name="email"
            value={form.email}
            onChange={(e) => handleInputs(e, setForm, form)}
          />
          <label
            className="pt-5 text-primary text-[0.8em] capitalize"
            htmlFor="Phone Number"
          >
            Phone Number
          </label>
          <input
            className="block outline-none w-full py-1 px-3 mt-1 mb-4  border-[0.53px] border-solid border-[rgba(0, 0, 0, 0.3)]"
            type="text"
            name="phoneNo"
            value={form.phoneNo}
            onChange={(e) => handleInputs(e, setForm, form)}
          />
          <label
            className="pt-5 text-primary text-[0.8em] capitalize"
            htmlFor="password"
          >
            password
          </label>
          <input
            className="block outline-none w-full py-1 px-3 mt-1 mb-4  border-[0.53px] border-solid border-[rgba(0, 0, 0, 0.3)]"
            type="text"
            name="password"
            value={form.password}
            onChange={(e) => handleInputs(e, setForm, form)}
          />
          <label
            htmlFor="full name"
            className="pt-5 text-primary text-[0.8em] capitalize"
          >
            repeat password
          </label>
          <input
            className="block outline-none w-full py-1 px-3 mt-1 mb-4  border-[0.53px] border-solid border-[rgba(0, 0, 0, 0.3)]"
            type="text"
            name="repeatPass"
            value={form.repeatPass}
            onChange={(e) => handleInputs(e, setForm, form)}
          />

          <input
            className="bg-primary w-auto border-none font-medium text-white rounded px-5 py-2 text-xs"
            type="button"
            value="Register"
          />
          <p className="font-medium mt-5 mr-3 text-[0.9em]">
            Do you have an account?{" "}
            <span className="text-primary font-bold">LOGIN</span>
          </p>
          {/* <p>{form.student}</p> */}
          {/* <p>{form.idNo}</p> */}
        </form>
        <img
          src="/login&registerpagephone.png"
          alt="login & register page phone"
          className="h-[90vh] basis-3/5"
        />
      </article>
    </section>
  );
};

export default Register;
