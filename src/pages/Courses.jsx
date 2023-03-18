import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getInfo } from '../fetchApi';

import videojs from 'video.js';
import 'video.js/dist/video-js.css';

import { Buttons } from 'components/Buttons/Buttons';
import {
  AllItems,
  ListItem,
  LinkItem,
  Title,
  ImageThumb,
  Image,
  InfoSection,
} from './Courses.styled';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const location = useLocation();
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  const chunkArray = arr => {
    let results = [];
    while (arr.length) {
      results.push(arr.splice(0, 10));
    }
    setCourses(results);
    setMaxPage(results.length);
  };

  useEffect(() => {
    try {
      getInfo().then(data => {
        // sorted by date from newest to oldest
        const sortedArray = data.sort((a, b) => Date.parse(b.launchDate) - Date.parse(a.launchDate));


        return chunkArray(sortedArray);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const ref = useRef(null);

  const OnHoverImage = ({ img, courseVideoPreview }) => {

    const [isHovering, setIsHovering] = useState(false);

    return (
      <>
        {isHovering && courseVideoPreview ? (
          <div>
            <video
              ref={ref}
              id="my_video"
              className="video-js"
              preload="auto"
              data-setup="{}"
              onPlay={() => setIsHovering(true)}
              onPause={() => setIsHovering(false)}
              onMouseEnter={() => {
                const player = videojs(ref.current);
                player.width(300);
                player.height('auto');
                player.play();
              }}
              onMouseLeave={() => {
                const player = videojs(ref.current);
                player.pause();
              }}
            >
              <source src={courseVideoPreview} type="application/x-mpegURL" />
            </video>
          </div>
        ) : (
          <ImageThumb
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Image src={img} alt="" width={300} />
          </ImageThumb>
        )}
      </>
    );
  };

  return (
    <>
      <AllItems>
        {courses.length !== 0 &&
          courses[`${page}`].map(course => (
            <ListItem key={course.id}>
              <LinkItem
                to={`${course.id}`}
                state={{ from: location }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <OnHoverImage
                  img={course.previewImageLink + '/cover.webp'}
                  courseVideoPreview={course.meta?.courseVideoPreview?.link}
                />
                <div>
                  <InfoSection>
                    <Title>Title: </Title>
                    <span>{course.title}</span>
                  </InfoSection>
                  <div>
                    <Title>Description: </Title>
                    <span>{course.description}</span>
                  </div>
                  <div>
                    <Title>Lessons Count: </Title>
                    <span>{course.lessonsCount}</span>
                  </div>

                  <ul>
                    <Title>Skills: </Title>
                    {course.meta?.skills &&
                      course.meta?.skills.map((skill, index) => {
                        return <li key={index}>{skill} </li>;
                      })}
                  </ul>
                  <div>
                    <Title>Course Raiting: </Title>
                    <span>{course.rating}</span>
                  </div>
                </div>
              </LinkItem>
            </ListItem>
          ))}
      </AllItems>
      {courses.length !== 0 && (
        <Buttons setPage={setPage} page={page} maxPage={maxPage} />
      )}
    </>
  );
};

export default AllCourses;
