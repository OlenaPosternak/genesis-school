import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { NotFound } from 'pages/NotFound';
import { Loader } from './Loader';
import { Container } from './App.styled';

// import { ErrorBoundary } from 'react-error-boundary';
const AllCourses = lazy(() => import('pages/Courses'));
const CourseInfo = lazy(() => import('pages/Lesson'));

window.g = null;
window.i = null;


// const ErrorFallback = ({ error }) => {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//     </div>
//   );
// };


export const App = () => {
  return (
      <Container>
    {/* <ErrorBoundary
    FallbackComponent={ErrorFallback}
  > */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/genesis-school" element={<AllCourses />} />
          <Route path="/genesis-school/:courseId" element={<CourseInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {/* </ErrorBoundary> */}
    </Container>
  );
};
