import { MouseEvent } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "warning" | "success";
  onClick: (e: MouseEvent) => void;
}

function Button({ children, color, onClick }: Props) {
  //   const handleClick = (e: MouseEvent) => console.log("Clicked:", e.target);

  return (
    <div className={"mx-1 btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
