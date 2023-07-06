import style from './Input.module.css';

interface Props {
  onChange: (value: string) => void;
}

export const Input = ({ onChange }: Props): JSX.Element => {
  return (
    <div className={style.input__wrapper}>
      <input
        type="text"
        placeholder="Write here..."
        name="text"
        onChange={(event) => onChange(event.target.value)}
        className={style.input}
      />
    </div>
  );
};
