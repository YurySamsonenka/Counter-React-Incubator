import './Button.style.css';

type ButtonPropsType = {
  title: string
  onClick: () => void
  disabled?: boolean
}

export const Button = ({ title, onClick, disabled }: ButtonPropsType) => {
  return (
    <button className={'button'} onClick={onClick} disabled={disabled}>{title}</button>);
};
