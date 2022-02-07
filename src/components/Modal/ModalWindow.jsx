import React from 'react';
import s from './ModalWindow.module.css';

export const ModalWindow = ({ children, openModal, setOpenModal }) => {
  const defaultClass = [s.Modal];

  openModal && defaultClass.push(s.active);

  return (
    <div className={defaultClass.join(' ')} onClick={() => setOpenModal(false)}>
      <div className={s.ModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
