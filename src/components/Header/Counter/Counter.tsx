import './Counter.scss';

type Props = {
    count: number;
}

export const Counter: React.FC<Props> = ({ count }) => {
  return (
    <span className="counter">{count}</span>
  );
};