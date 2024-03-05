import { ReactNode } from 'react';
import { useAppSelector } from '../../hookes/redux';
import css from './Modal.module.css';

type ModalProps = {
    isHidden:boolean;
    setIsModal:React.Dispatch<boolean>;
    children: ReactNode
}

export const Modal = (props:ModalProps) => {


    const isHidden = useAppSelector(state=>state.modal.isHidden);

    console.log('isHidden', isHidden);
    const handleCloseBtnClick = () => {
        props.setIsModal(false);
    }

  return (
    <div className={isHidden ? `${css.backdrop} ${css.isHidden}` : css.backdrop}>
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
