import React, { type FC } from 'react';
import type { ButtonProps } from './Button.props.ts';
import './Button.scss';
const Button: FC<ButtonProps> = React.memo(({ primary, label, onClick, size }) => {
    return (
        <button
            type='button'
            className={`cmp-button ${primary ? 'primary' : 'secondary'} ${size}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
});

export default Button;