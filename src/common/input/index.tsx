import s from "./styled.module.scss";

interface InputProps {
  placeholder: string;
  variant: "primary" | "secondary";
  error: string;
  register: ()=>void;
  type: string;
}

const Input = ({
  placeholder,
  variant,
  type,
  error,
  register,
}: InputProps): JSX.Element => {
  const styleVariant = {
    primary: s.primary,
    secondary: s.secondary,
  };

  return (
    <>
      {" "}
      <input
        type={type}
        placeholder={placeholder}
        className={styleVariant[variant]}
        {...register}
      ></input>
      <p>{error}</p>
    </>
  );
};

export default Input;
