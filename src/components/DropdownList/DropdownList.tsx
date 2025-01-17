import React, { useEffect, useRef, useState } from 'react';
import './DropdownList.scss';
import classNames from 'classnames';

interface Props {
  description: string;
  items: string[] | number[];
  onSelect: (selected: string | number) => void;
  selected?: string | number;
}

export const DropdownList: React.FC<Props> = ({
  description,
  items,
  onSelect,
  selected,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  //const [selectedItem, setSelectedItem] = useState<string | number>(description);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (item: string | number) => {

    onSelect(item);
    setIsOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (!dropdownRef.current?.contains(event.target as Node)) {
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
      <label className="dropdown__title title">{description}</label>
      <button
        className="dropdown__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <img
          src='/icons/arrow-dropdown.svg'
          alt="dropdown icon"
          className={classNames('dropdown__icon', { 'is-open': isOpen })}
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
