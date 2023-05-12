import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-info mt-5 alert-dismissible">
      <h1 className="text-teal-200">{children}</h1>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
};

export default Alert;
