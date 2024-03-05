import { ReactNode } from 'react';
import css from './Container.module.css';

export const Container = (props: {children:ReactNode} )=> {
    return (
        <div className={css.container}>
            {props.children}
        </div>
    )
}