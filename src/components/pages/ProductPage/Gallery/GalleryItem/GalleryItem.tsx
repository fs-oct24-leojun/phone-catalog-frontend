import classNames from "classnames";

type Props = {
    image: string;
    preview: string;
    selectedPreview: (preview: string) => void;
}

export const GalleryItem: React.FC<Props> = ({ image, selectedPreview, preview }) => {
  const isItemActive = preview === image;
    
  return (
    <div className={classNames('image-selector__item', {'is-active': isItemActive})} style={{backgroundImage: `url(/${image})`}}
      onClick={() => selectedPreview(image)}></div>
  );
}