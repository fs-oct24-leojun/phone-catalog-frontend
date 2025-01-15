import './Paragraph.scss';

type Props = {
    title: string,
    text: string,
}

export const Paragraph: React.FC<Props> = ({ title, text }) => {
  return (
    <div className="about-section__paragraph paragraph">
      <h3 className="paragraph__headline">{title}</h3>
      <p className="paragraph__text">{text}</p>
    </div>
  );
}