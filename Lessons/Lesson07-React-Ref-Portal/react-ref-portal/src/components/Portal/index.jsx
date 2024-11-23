import ReactDOM from "react-dom";

const Portal = ({ target, text }) => {
  return ReactDOM.createPortal(
    <div className="portal">Hi, welcome! text: {text}</div>,
    target
  );
};

export default Portal;
