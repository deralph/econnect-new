import React, { useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import { handleInputs } from "../../../../extra/function";
import BackArrow from "../../BackArrow";

const EditProfile = () => {
  const [form, setForm] = useState({
    fullname: "Oluwadamilola Samuel",
    email: "dameaze@gmail.com",
    phone: "08149800592",
    faculty: "Science",
    department: "Computer Science",
    profileDesc:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, ",
  });

  return (
    <section className="center">
      <BackArrow heading={"Edit Profile"} />
      <section className="bg-white overflow-scroll relative pt-4 h-[calc(100vh-50px)] overflow-scroll">
        <div className="grid place-content-center min-h-[40vh]">
          <img
            className="w-48 rounded-[50%]"
            src="/profilePics.png"
            alt="profile pics"
          />
          <button className="bg-primary rounded py-2 px-4 font-medium text-xs text-center text-white flex items-center justify-center mt-4">
            <BsCameraFill className="mr-2" />
            Edit Photo
          </button>
        </div>
        <form action="" className="w-[70%] my-4 mx-auto">
          <label
            htmlFor=""
            className="font-primary font-medium text-base text-primary"
          >
            Fullname
            <input
              type="text"
              onChange={(e) => handleInputs(e, setForm, form)}
              name="fullname"
              value={form.fullname}
              className="outline-none w-full font-medium bg-white font-primary mt-2 mx-0 mb-6 text-base rounded p-4 border-[0.5px] border-solid border-[rgba(0, 0, 0, 0.5)] text-[rgba(0, 0, 0, 0.8)]"
            />
          </label>
          <label
            htmlFor=""
            className="font-primary font-medium text-base text-primary"
          >
            E-Mail
            <input
              type="text"
              onChange={(e) => handleInputs(e, setForm, form)}
              name="email"
              value={form.email}
              className="outline-none w-full font-medium bg-white font-primary mt-2 mx-0 mb-6 text-base rounded p-4 border-[0.5px] border-solid border-[rgba(0, 0, 0, 0.5)] text-[rgba(0, 0, 0, 0.8)]"
            />
          </label>
          <label
            htmlFor=""
            className="font-primary font-medium text-base text-primary"
          >
            Phone Number
            <input
              type="text"
              onChange={(e) => handleInputs(e, setForm, form)}
              name="phone"
              value={form.phone}
              className="outline-none w-full font-medium bg-white font-primary mt-2 mx-0 mb-6 text-base rounded p-4 border-[0.5px] border-solid border-[rgba(0, 0, 0, 0.5)] text-[rgba(0, 0, 0, 0.8)]"
            />
          </label>
          <label
            htmlFor=""
            className="font-primary font-medium text-base text-primary"
          >
            Faculty
            <select
              name="faculty"
              value={form.faculty}
              onChange={(e) => handleInputs(e, setForm, form)}
              className="outline-none w-full font-medium bg-white font-primary mt-2 mx-0 mb-6 text-base rounded p-4 border-[0.5px] border-solid border-[rgba(0, 0, 0, 0.5)] text-[rgba(0, 0, 0, 0.8)]"
            >
              <option value="">Choose Faculty</option>
              <option value="science">Science</option>
              <option value="Arts">Arts</option>
              <option value="Education">Education</option>
              <option value="Earth Science">Earth Science</option>
            </select>
          </label>
          <label htmlFor="">
            Department
            <select
              className="outline-none w-full font-medium bg-white font-primary mt-2 mx-0 mb-6 text-base rounded p-4 border-[0.5px] border-solid border-[rgba(0, 0, 0, 0.5)] text-[rgba(0, 0, 0, 0.8)]"
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
          <label
            htmlFor=""
            className="font-primary font-medium text-base text-primary"
          >
            Profile Description
            <textarea
              name="proffileDesc"
              onChange={(e) => handleInputs(e, setForm, form)}
              value={form.profileDesc}
              className="outline-none w-full font-normal text-black bg-[rgba(0, 0, 0, 0.03)] font-primary mt-2 mx-0 mb-6 text-xs text-justify rounded min-h-[20vh] p-8"
            />
          </label>
          <button className="bg-primary rounded py-4 px-8 font-semibold text-base text-center text-white flex items-center justify-center mt-4">
            Update
          </button>
        </form>
      </section>
    </section>
  );
};

export default EditProfile;
