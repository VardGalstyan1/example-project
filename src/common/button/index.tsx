import  s from "./styled.module.scss"

interface ButtonProps {
  onClick: () => void;
  title: string;
  variant:"primary"| "secondary";
 
}

const Button = ({ title, onClick, variant }: ButtonProps): JSX.Element => {
const styleVariant = {
  primary:s.primary,
  secondary:s.secondary
}

  return <button onClick={onClick} className={styleVariant[variant]}>{title}</button>;
};

export default Button;
