import style from './Button.module.css';

interface Props {
  color?: 'danger' | 'primary' | 'success';
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
}

export const Button = (props: Props): JSX.Element => {
  const color = props.color ?? 'primary';
  const loading = props.loading ?? false;
  return (
    <div>
      {loading ? (
        <button
          className={`${style.button} ${
            style[`button-${color}`]
          }`}
          onClick={props.onClick}
        >
          loading...
          <div className={style.loader}></div>
        </button>
      ) : (
        <button
          className={`${style.button} ${
            style[`button-${color}`]
          }`}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      )}
    </div>
  );
};
