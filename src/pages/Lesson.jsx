import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getCourseById } from '../fetchApi';

import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/forest/index.css';

import noImage from '../img/noImg1.jpg';
import {

  MainTitele,
  Wrapper,
  SpeedInfo,
  LessonsList,
  LessonItem,
  ImgThumb,
  NoImg,
  Img,
  WatchBtn,
  LockedBtn,
} from './Lesson.styled';

const CourseInfo = () => {
  const { courseId } = useParams();


  const [course, setCourse] = useState('');
  const [lessons, setLessons] = useState([]);

  const [order, setOrder] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    async function getCourse() {
      try {
        const data = await getCourseById(courseId);
        setCourse(data);

        const sorted = data.lessons.sort((a, b) => a.order - b.order);
        setLessons(sorted);
        if (courseId !== localStorage.getItem('course-id')) {
          localStorage.setItem('lesson-order', '');
          localStorage.setItem('lesson-id', '');
          localStorage.setItem('course-id', '');
        }

        const player = videojs(ref.current);
        player.width(300);
        player.height('auto');

        let picture =
          data.lessons[order].previewImageLink +
          `/lesson-` +
          `${order + 1}` +
          '.webp';

        player.poster(picture);

        const savedTime = localStorage.getItem('videoplayer-current-time');
        if (savedTime) {
          player.currentTime(savedTime);
        }

        player.on(parseFloat(savedTime));
      } catch (error) {
        console.log(error);
      }
    }
    getCourse();
  }, [courseId, order]);

  document.addEventListener('keydown', event => {
    const player = videojs(ref.current);

    // Increase playback rate when 'f' key is pressed
    if (event.key === 'f') {
      const currentPlaybackRate = player.playbackRate();

      player.playbackRate(currentPlaybackRate + 0.25);
    }

    // Decrease  playback rate when 's' key is pressed
    if (event.key === 's') {
      const currentPlaybackRate = player.playbackRate();
      player.playbackRate(currentPlaybackRate - 0.25);
    }

    return () => {
      document.removeEventListener('keydown');
    };
  });

  const handleClick = () => {
    const player = videojs(ref.current);
    const currentTime = player.currentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
  };

  function onChangeValue(clickOrder, lessonId) {
    setOrder(clickOrder);

    localStorage.setItem('lesson-order', clickOrder);
    localStorage.setItem('lesson-id', lessonId);
    localStorage.setItem('course-id', courseId);

    const player = videojs(ref.current);

    player.src({
      src: lessons[clickOrder - 1].link,
      type: 'application/x-mpegURL',
    });

    player.play();
  }

  return (
    <div>
      {/* <BackLink to={backLinkHref}>
        <BackBtn>GO BACK</BackBtn>
      </BackLink> */}
      {course ? (
        <>
          <MainTitele>Course title:</MainTitele>
          <span>{course.title} </span>

          <MainTitele>Description:</MainTitele>
          {course.description}
        </>
      ) : (
        ''
      )}

      <div>
        {lessons.length ? (
          <div>
            <MainTitele>Lesson title:</MainTitele>
            <span>{lessons[order - 1].title}</span>
            <MainTitele>
              {' '}
              Lesson number:{' '}
              {localStorage.getItem('lesson-order') ||
                Number(lessons[order].order) - 1}
            </MainTitele>
          </div>
        ) : (
          ''
        )}
      </div>
      {lessons.length ? (
        <Wrapper>
          <div>
            <video
              ref={ref}
              id="my_video"
              className="video-js vjs-theme-forest"
              controls
              preload="auto"
              data-setup='{ "playbackRates": [0.5, 1, 1.5, 2] }'
              onClick={handleClick}
            >
              <source
                src={
                  lessons[localStorage.getItem('lesson-order') || order].link
                }
                type="application/x-mpegURL"
              />
            </video>

            <SpeedInfo>
              <p>To increase video speed +0.25 press button k</p>
              <p>To decrease video speed -0.25 press button s </p>
            </SpeedInfo>
          </div>
          <LessonsList>
            {lessons.map(les => {
              return (
                <LessonItem
                  key={les.id}
                  onClick={() => {
                    onChangeValue(les.order, les.id);
                  }}
                >
                  <p>{les.title}</p>
                  <p>Lesson Number {les.order}</p>
                  <ImgThumb>
                    <NoImg src={noImage} alt="noImage" />
                    <Img
                      src={
                        les.previewImageLink + `/lesson-` + les.order + '.webp'
                      }
                      alt="lesson img"
                    />
                  </ImgThumb>
                  {les.status === 'unlocked' ? (
                    <WatchBtn>Watch the video</WatchBtn>
                  ) : (
                    <LockedBtn>locked</LockedBtn>
                  )}
                </LessonItem>
              );
            })}
          </LessonsList>
        </Wrapper>
      ) : (
        ''
      )}
    </div>
  );
};

export default CourseInfo;
