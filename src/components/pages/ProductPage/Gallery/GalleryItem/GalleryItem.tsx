import classNames from "classnames";

type Props = {
    image: string;
    preview: string;
    index: number;
    selectedPreview: (preview: number) => void;
}

export const GalleryItem: React.FC<Props> = ({ image, selectedPreview, preview, index }) => {
  const isItemActive = preview === image;
    
  return (
    <div className={classNames('image-selector__item', {'is-active': isItemActive})} style={{backgroundImage: `url(/${image})`}}
      onClick={() => selectedPreview(index)}></div>
  );
}