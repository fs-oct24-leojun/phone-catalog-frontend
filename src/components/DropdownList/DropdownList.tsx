import React, { useEffect, useRef, useState } from 'react';
import './DropdownList.scss';

interface Props {
  description: string;
  items: string[];
  onSelect: (selected: string) => void;
}

export const DropdownList: React.FC<Props> = ({
  description,
  items,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(description);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <label className="dropdown__description">{description}</label>
      <button
        className="dropdown__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem}
        <img
          src={
            isOpen ?
              './public/icons/arrow-up.svg'
            : './public/icons/arrow-down.svg'
          }
          alt="dropdown icon"
          className="dropdown__icon"
        />
      </button>
      {isOpen && (
        <ul className="dropdown__list">
          {items.map((item) => (
            <li
              key={item}
              className="dropdown__item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
