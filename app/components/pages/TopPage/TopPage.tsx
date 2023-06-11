import Image from 'next/image';
import { AudioPlayer } from '../../features';
import { Button, Input } from '../../parts';
import style from './TopPage.module.css';

export const TopPage = (): JSX.Element => {
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
        <Input />
        <Button color="success">generate</Button>
        <AudioPlayer
          music={
            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
          }
        />
      </div>
    </div>
  );
};
