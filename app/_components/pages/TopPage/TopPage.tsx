'use client';
import Image from 'next/image';
import { AudioPlayer } from '../../features';
import { Button, Input } from '../../parts';
import style from './TopPage.module.css';
import { useTopPage } from './useTopPage';

export const TopPage = (): JSX.Element => {
  const { handleChange, handleSubmit, loading, music } =
    useTopPage();
  return (
    <div className={style.toppage}>
      <Image
        alt="backgroundImage"
        src="/oooscillate.svg"
        fill
        className={style.img}
      />
      <h1 className={style.sweet__title}>
        <span data-text="Generate">Generate</span>
        <span data-text="Music">Music</span>
      </h1>
      <div className={style.top__item}>
        <Input onChange={handleChange} />
        <Button
          color="success"
          onClick={handleSubmit}
          loading={loading}
        >
          generate
        </Button>
        <AudioPlayer music={music} />
      </div>
    </div>
  );
};
