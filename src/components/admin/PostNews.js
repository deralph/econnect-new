import React, { useState } from "react";
import BackArrow from "../newsFeed/BackArrow";
import styles from "../../styles/admin/postnews.module.css";
import { handleInputs } from "../../extra/function";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
const PostNews = () => {
  const [tag, setTag] = useState([]);
  const [form, setForm] = useState({
    title: "",
    postTitle: "",
    student: "",
    faculty: "",
    department: "",
    tag: "",
  });
  const option = [
    {
      main: "View Posted Updates",
      color: "#4063D6",
    },
  ];
  console.log(tag);
  const addTag = (param) => {
    if (param === "add") {
      setTag(...tag, form.tag);
    }
    setTag(tag.filter((tags, i) => tag.length - 1 === i));
  };
  return (
    <section className="edit">
      <BackArrow heading={"Post News/Broadcast"} noArr option={option} />
      <article className={styles.article}>
        <form action="">
          <label htmlFor="" className={styles.labelText}>
            Post title
            <input
              type="text"
              onChange={(e) => handleInputs(e, setForm, form)}
              name="title"
              value={form.title}
            />
          </label>
          <label htmlFor="" className={styles.labelText}>
            Post Title
            <textarea
              placeholder="type"
              name="postTitle"
              value={form.postTitle}
              onChange={(e) => handleInputs(e, setForm, form)}
            />
          </label>

          <div className={styles.tags}>
            <FaMinusCircle
              style={{ color: "#f00", fontSize: "1.5em" }}
              onClick={() => addTag("min")}
            />
            <div>
              {tag && (
                <ul>
                  {tag.map((tags) => (
                    <li>{tags}</li>
                  ))}
                </ul>
              )}
              <input
                type="text"
                name="tag"
                value={form.tag}
                onChange={(e) => handleInputs(e, setForm, form)}
              />
            </div>
            <FaPlusCircle
              style={{ color: "#0f0", fontSize: "1.5em" }}
              onClick={() => addTag("add")}
            />
          </div>
          <div className={styles.student}>
            <p>Select Audience</p>
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
          </div>
        </form>
        <article className={styles.file}>
          <div>
            <p className={styles.head}>attach to your update</p>
            <div>
              <p>photo</p>
              <p>video</p>
            </div>
            <div>
              <p>Add Photo</p>
            </div>
            <button>Attach Now </button>
          </div>
          <button>Post Now</button>
        </article>
      </article>
    </section>
  );
};

export default PostNews;
