import React, { useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/profile.module.css";
import BackArrow from "../../BackArrow";

const EditProfile = () => {
  const [inputs, setInputs] = useState({
    fullname: "Oluwadamilola Samuel",
    email: "dameaze@gmail.com",
    phone: "08149800592",
    faculty: "Science",
    department: "Computer Science",
    profileDesc:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, ",
  });

  const handleInputs = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <section className={style.center}>
      <BackArrow heading={"Edit Profile"} />
      <section className={styles.profile}>
        <div className={styles.dp}>
          <img src="/profilePics.png" alt="profile pics" />
          <button>
            <BsCameraFill style={{ marginRight: ".5em" }} />
            Edit Photo
          </button>
        </div>
        <form action="">
          <label htmlFor="">
            Fullname
            <input
              type="text"
              onChange={handleInputs}
              name="fullname"
              value={inputs.fullname}
            />
          </label>
          <label htmlFor="">
            E-Mail
            <input
              type="text"
              onChange={handleInputs}
              name="email"
              value={inputs.email}
            />
          </label>
          <label htmlFor="">
            Phone Number
            <input
              type="text"
              onChange={handleInputs}
              name="phone"
              value={inputs.phone}
            />
          </label>
          <label htmlFor="">
            Faculty
            <select
              name="faculty"
              value={inputs.faculty}
              onChange={handleInputs}
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
              name="faculty"
              value={inputs.department}
              onChange={handleInputs}
            >
              <option value="">Choose Department</option>
              <option value="science">English</option>
              <option value="Computer Science">Computer Science</option>
              <option value="History">History</option>
              <option value="Geography">Geography</option>
            </select>
          </label>
          <label htmlFor="">
            Profile Description
            <textarea
              name="proffileDesc"
              onChange={handleInputs}
              value={inputs.profileDesc}
            />
          </label>
          <button>Update</button>
        </form>
      </section>
    </section>
  );
};

export default EditProfile;
