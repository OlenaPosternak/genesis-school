import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getInfo } from '../fetchApi';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getInfo().then(data => setCourses(data));
  }, []);

  return (
    <ul>
      {courses &&
        courses.map(course => (
          <li
            key={course.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              margin: '10px',
            }}
          >
            <Link to={`${course.id}`} state={{ from: location }}>
              <p>Title: {course.title}</p>
              <img
                src={course.previewImageLink + '/cover.webp'}
                alt=""
                width={100}
              />
              <p>Description: {course.description}</p>
              <p>Lessons Count: {course.lessonsCount}</p>
              <ul>
                Skills:{' '}
                {course.meta?.skills &&
                  course.meta?.skills.map((skill, index) => {
                    return <li key={index}>{skill} </li>;
                  })}
              </ul>
              <hr></hr>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default AllCourses;
