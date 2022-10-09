import React, { useState } from "react";
import styles from "../../styles/signin.module.css";
import style from "../../styles/landingPage.module.css";

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

  const handleInputs = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <section className={styles.section}>
      {" "}
      <img
        src="/econnectLogo.png"
        alt="econnect logo"
        className={styles.logo}
      />
      <article className={styles.container}>
        <form action="">
          <h1>Register</h1>
          <label htmlFor="full name">
            fullname
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleInputs}
            />
          </label>
          <div>
            <p>are you a student?</p>
            <div className="radios" onChange={handleInputs} name="student">
              <label>
                <input
                  id="student"
                  name="student"
                  type="radio"
                  value="yes"
                  checked={form.student === "yes"}
                />
                Yes
              </label>
              <label>
                <input
                  id="student"
                  name="student"
                  type="radio"
                  value="no"
                  checked={form.student === "no"}
                />
                No
              </label>
            </div>
          </div>
          <label htmlFor="id no.">
            Matric/Jamb/Part-Time Number
            <input
              type="text"
              name="idNo"
              value={form.idNo}
              onChange={handleInputs}
            />
          </label>
          <label htmlFor="email">
            E-mail
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleInputs}
            />
          </label>
          <label htmlFor="Phone Number">
            Phone Number
            <input
              type="text"
              name="phoneNo"
              value={form.phoneNo}
              onChange={handleInputs}
            />
          </label>
          <label htmlFor="password">
            password
            <input
              type="text"
              name="password"
              value={form.password}
              onChange={handleInputs}
            />
          </label>
          <label htmlFor="full name">
            repeat password
            <input
              type="text"
              name="repeatPass"
              value={form.repeatPass}
              onChange={handleInputs}
            />
          </label>

          <input type="button" value="Register" />
          <p className={styles.foot}>
            Do you have an account? <span>LOGIN</span>
          </p>
          <p>{form.student}</p>
          <p>{form.idNo}</p>
        </form>
        <img
          src="/login&registerpagephone.png"
          alt="login & register page phone"
          className={styles.phone}
        />
      </article>
    </section>
  );
};

export default Register;
