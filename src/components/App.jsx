import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { NotFound } from 'pages/NotFound';

const AllCourses = lazy(() => import('pages/Courses'));
const CourseInfo = lazy(() => import('pages/Lesson'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/genesis-school" element={<AllCourses />} />
        <Route path="/genesis-school/:courseId" element={<CourseInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
