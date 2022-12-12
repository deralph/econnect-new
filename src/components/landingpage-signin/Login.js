import React, { useState } from "react";
import styles from "../../styles/signin.module.css";
import { handleInputs } from "../../extra/function";
import BackArrow from "../newsFeed/BackArrow";

const Login = ({ forget, admin }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <section className={`${styles.section} ${styles.section1}`}>
      {/* <section> */}{" "}
      <img
        src="/econnectLogo.png"
        alt="econnect logo"
        className="absolute top-5 left-[5%]"
      />
      {/* <article className={styles.container}> */}
      <article className="flex justify-between items-center pt-[8%] pr-[5%] pb-[5%] pl-[7%]">
        <form action="" className="basis-[26%]">
          {/* {admin && <AiOutlineArrowLeft className={styles.icon} />} */}
          {/* <h1>
            {forget ? "Forgot password" : admin ? "Admin Login" : "Login"}
          </h1> */}
          {forget ? (
            <BackArrow
              heading={"Forgot password"}
              noArr
              className="text-primary"
            />
          ) : admin ? (
            <BackArrow heading={"Admin Login"} />
          ) : (
            <BackArrow heading={"Login"} noArr className="text-primary" />
          )}
          {forget && (
            <p className="text-[#323232] text-xs py-3 px-0">
              Enter your registered email address to get a password reset link
            </p>
          )}
          <label htmlFor="email">
            {" "}
            E-mail
            <input
              type="text"
              onChange={(e) => handleInputs(e, setForm, form)}
              value={form.email}
              name="email"
              className="block outline-none w-full py-1 px-3 mt-1 mb-4  border-[0.53px] border-solid border-[rgba(0, 0, 0, 0.3)]"
            />
          </label>
          {!forget && (
            <label htmlFor="email">
              {" "}
              Password
              <input
                type="text"
                onChange={(e) => handleInputs(e, setForm, form)}
                value={form.password}
                name="password"
                className="block outline-none w-full py-1 px-3 mt-1 mb-4  border-[0.53px] border-solid border-[rgba(0, 0, 0, 0.3)]"
              />
            </label>
          )}
          <div className="flex justify-between items-center">
            <input
              type="button"
              value={forget ? "Reset Password" : "Login"}
              className="bg-primary w-auto border-none font-medium text-white rounded px-5 py-2 text-xs"
            />{" "}
            <>
              {admin ? (
                <p className="font-bold text-xs lowercase text-black">
                  <span>login</span> as a user{" "}
                </p>
              ) : forget ? (
                ""
              ) : (
                <p className="text-[#9e1c33] font-semibold">Forgot Password</p>
              )}
            </>
          </div>
          <p className="font-medium mt-5 mr-3 text-sm">
            Do you have an account?{" "}
            <span className="font-bold text-primary ">REGISTER</span>
          </p>
          {!forget && (
            <p className="font-medium mt-5 mr-3 text-sm">
              <span className="font-bold text-primary capitalize">Login</span>{" "}
              as the admin
            </p>
          )}
        </form>
        <img
          src={admin ? "/adminloginlock.png" : "/login&registerpagephone.png"}
          alt="admin login lock"
          className="h-[90vh] basis-3/5"
        />
      </article>
    </section>
  );
};

export default Login;
