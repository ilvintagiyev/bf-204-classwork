import React from "react";

const Courses = ({ data }) => {
  return (
    <div className="courses">
      {data &&
        data.map((q) => {
          return (
            <div key={q.id}>
              <h2>Name :{q.name}</h2>
              <p>Price : {q.price}</p>
              <img src={q.img} alt="" />
            </div>
          );
        })}
    </div>
  );
};

export default Courses;
