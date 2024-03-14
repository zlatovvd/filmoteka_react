import { ReactNode, useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hookes/redux';
import { closeModal } from '../../redux/modalSlice';
import css from './Modal.module.css';

type ModalProps = {
  children: ReactNode;
};

export const Modal = (props: ModalProps) => {
  const isHidden = useAppSelector(state => state.modal.isHidden);

  const dispatch = useAppDispatch();

  const handleCloseBtnClick = () => {
    dispatch(closeModal());
  };

  const handleBackdropClick = (event: React.SyntheticEvent<EventTarget>) => {
    if (event.currentTarget === event.target) {
      dispatch(closeModal());
    }
  };

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') dispatch(closeModal());
    },
    [dispatch]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);

    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [dispatch, handleEscapeKey]);

  return (
    <div
      className={isHidden ? `${css.backdrop} ${css.isHidden}` : css.backdrop}
      onClick={handleBackdropClick}
    >
      <div className={css.modalMovie}>
        <button className={css.modalCloseBtn} onClick={handleCloseBtnClick}>
          <svg width="30px" height="30px">
            <use href="./images/icons.svg#icon-close"></use>
          </svg>
        </button>
        <div className={css.modalContent}>{props.children}</div>
      </div>
    </div>
  );
};
