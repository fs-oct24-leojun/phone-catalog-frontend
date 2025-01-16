import './Paragraph.scss';

type Props = {
    title: string,
    text: string,
}

export const Paragraph: React.FC<Props> = ({ title, text }) => {
  return (
    <div className="paragraph">
      <h4 className="paragraph__headline headline--4">{title}</h4>
      <p className="paragraph__text">{text}</p>
    </div>
  );
}