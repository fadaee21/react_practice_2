import React, { useState } from "react";

const data = [
  {
    id: 1,

    title: "React",

    persianTitle: "ری‌اکت",

    url: "https://quera.ir/college/assignments/30868",
  },

  {
    id: 2,

    title: "Javascript",

    persianTitle: "جاوا اسکریپت",

    url: "https://quera.ir/college/assignments/30818",
  },
];

function CourseList() {
  const [courses, setCourses] = useState(data);

  const [val, setVal] = useState("");

  const [editId, setEditId] = useState(null);

  const [type, setType] = useState("");

  const handleClick = (e, id) => {
    const content = e.target.textContent;
    setVal(content);
    setEditId(id);
    const gg = e.target.getAttribute("type-attribute");
    setType(gg);
  };

  const handleButton = () => {
    const items = courses.map((course) => {
      console.log(course);

      if (course.id === editId) {
        return { ...course, [type]: val };
      } else {
        return course;
      }
    });

    setCourses(items);
  };

  return (
    <>
      {courses.map((course) => {
        const { id, title } = course;

        return (
          <div key={id}>
            <div>
              <h1 type-attribute="title">{title}</h1>
              <button
                onClick={(e) => {
                  handleClick(e, id);
                }}
              >
                edit
              </button>
            </div>
          </div>
        );
      })}
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <button onClick={handleButton}>Edit</button>
    </>
  );
}

export default CourseList;
