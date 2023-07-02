import style from './Input.module.css';

interface Props {
  onChange?: (
    // eslint-disable-next-line no-unused-vars
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export const Input = ({ onChange }: Props): JSX.Element => {
  return (
    <div className={style.input__wrapper}>
      <input
        type="text"
        placeholder="Write here..."
        name="text"
        onChange={onChange}
        className={style.input}
      />
    </div>
  );
};
