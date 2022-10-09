import React, { useState } from "react";
import styles from "../../styles/signin.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Login = ({ forget, admin }) => {
  const [form, setForm] = useState({ email: "", password: "" });
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
    <section className={`${styles.section} ${styles.section1}`}>
      {" "}
      <img
        src="/econnectLogo.png"
        alt="econnect logo"
        className={styles.logo}
      />
      <article className={styles.container}>
        <form action="">
          {admin && <AiOutlineArrowLeft className={styles.icon} />}
          <h1>
            {forget ? "Forgot password" : admin ? "Admin Login" : "Login"}
          </h1>
          {forget && (
            <p className={styles.forget}>
              Enter your registered email address to get a password reset link
            </p>
          )}
          <label htmlFor="email">
            {" "}
            E-mail
            <input
              type="text"
              onChange={handleInputs}
              value={form.email}
              name="email"
            />
          </label>
          {!forget && (
            <label htmlFor="email">
              {" "}
              Password
              <input
                type="text"
                onChange={handleInputs}
                value={form.password}
                name="password"
              />
            </label>
          )}
          <div className={styles.action}>
            <input type="button" value={forget ? "Reset Password" : "Login"} />{" "}
            <>
              {admin ? (
                <p className={styles.login}>
                  <span>login</span> as a user{" "}
                </p>
              ) : forget ? (
                ""
              ) : (
                <p className={styles.forgot}>Forgot Password</p>
              )}
            </>
          </div>
          <p className={styles.foot}>
            Do you have an account? <span>REGISTER</span>
          </p>
          {!forget && (
            <p className={styles.foot}>
              <span>Login</span> as the admin
            </p>
          )}
        </form>
        <img
          src={admin ? "/adminloginlock.png" : "/login&registerpagephone.png"}
          alt="admin login lock"
          className={styles.phone}
        />
      </article>
    </section>
  );
};

export default Login;
