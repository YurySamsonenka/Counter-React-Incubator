import './Button.style.css';
import { memo } from 'react';

type ButtonPropsType = {
  title: string
  onClick: () => void
  disabled?: boolean
}

export const Button = memo(({ title, onClick, disabled }: ButtonPropsType) => {
  return (
    <button className={'button'} onClick={onClick} disabled={disabled}>{title}</button>);
});
