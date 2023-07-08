'use client';
import { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaForward } from 'react-icons/fa';
import style from './AudioPlayer.module.css';

interface Props {
  music?: string;
}

export const AudioPlayer = ({
  music,
}: Props): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioPlayer = useRef<HTMLAudioElement | null>(null);
  const progressBar = useRef<HTMLInputElement | null>(null);
  const animationRef = useRef<number | undefined>();
  useEffect(() => {
    if (audioPlayer.current && music) {
      audioPlayer.current.src = music;
    }
  }, [music]);
  useEffect(() => {
    if (audioPlayer?.current && progressBar.current) {
      const seconds = Math.floor(
        audioPlayer.current.duration
      );
      setDuration(seconds);
      progressBar.current.max = seconds.toString();
    }
  }, [
    audioPlayer?.current?.onloadedmetadata,
    audioPlayer?.current?.readyState,
  ]);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (audioPlayer.current) {
      if (!prevValue) {
        audioPlayer.current.play();
        animationRef.current =
          requestAnimationFrame(whilePlaying);
      } else {
        audioPlayer.current.pause();
        cancelAnimationFrame(
          animationRef.current as number
        );
      }
    }
  };
  const whilePlaying = () => {
    if (progressBar.current && audioPlayer.current) {
      progressBar.current.value =
        audioPlayer.current.currentTime.toString();
      changePlayerCurrentTime();
      if (
        progressBar.current.value ===
        progressBar.current.max
      ) {
        setIsPlaying(false);
      } else {
        animationRef.current =
          requestAnimationFrame(whilePlaying);
      }
    }
  };
  const changeRange = () => {
    if (progressBar?.current && audioPlayer?.current) {
      const currentTime = parseFloat(
        progressBar.current.value
      );
      audioPlayer.current.currentTime = currentTime;
      changePlayerCurrentTime();
    }
  };

  const changePlayerCurrentTime = () => {
    if (progressBar?.current && audioPlayer?.current) {
      const progressValue = parseInt(
        progressBar.current.value
      );
      const duration = audioPlayer.current.duration;
      progressBar.current.style.setProperty(
        '--seek-before-width',
        `${(progressValue / duration) * 100}%`
      );
      setCurrentTime(progressValue);
    }
  };
  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes =
      minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds =
      seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };
  const backThirty = () => {
    if (progressBar.current !== null) {
      progressBar.current.value = String(
        Number(progressBar.current.value) - 10
      );
      changeRange();
    }
  };

  const forwardThirty = () => {
    if (progressBar.current !== null) {
      progressBar.current.value = String(
        Number(progressBar.current.value) + 10
      );
      changeRange();
    }
  };

  return (
    <div className={style.audioPlayer}>
      {music !== '' ? (
        <>
          <div className={style.audio__image}>
            <div className={style.playing}>
              {isPlaying && (
                <>
                  {Array.from(
                    { length: 12 },
                    (_, index) => (
                      <div
                        key={index}
                        className={`${style.greenline} ${
                          style[
                            `line${
                              Math.floor(
                                Math.random() * 5
                              ) + 1
                            }`
                          ]
                        }`}
                      />
                    )
                  )}
                </>
              )}
            </div>
          </div>
          <div className={style.audio__wrapper}>
            <audio
              ref={audioPlayer}
              preload="metadata"
            ></audio>
            <div className={style.audioPlayer__buttons}>
              <button
                onClick={backThirty}
                className={style.forward__button}
              >
                <FaForward className={style.forward} /> 10
              </button>
              <button
                onClick={togglePlayPause}
                className={style.playPause}
              >
                {isPlaying ? (
                  <FaPause />
                ) : (
                  <FaPlay className={style.play} />
                )}
              </button>
              <button
                className={style.Backward}
                onClick={forwardThirty}
              >
                10 <FaForward />
              </button>
            </div>
            <div className={style.progressBar__wrapper}>
              <div className={style.currentTime}>
                {calculateTime(currentTime)}
              </div>
              <div>
                <input
                  type="range"
                  className={style.progressBar}
                  defaultValue="0"
                  ref={progressBar}
                  onChange={changeRange}
                />
              </div>
              <div className={style.duration}>
                {calculateTime(duration)}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>音楽を生成してください！</p>
      )}
    </div>
  );
};
