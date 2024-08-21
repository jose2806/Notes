import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  const total = course.parts.reduce((total, actual) => {
    return total + actual.exercises;
  }, 0);

  return (
    <div>
      <Header name={course.name} />
      <Content content={course.parts} />
      <p>
        <strong>Total of {total} exercises</strong>{" "}
      </p>
    </div>
  );
};

export default Course;
