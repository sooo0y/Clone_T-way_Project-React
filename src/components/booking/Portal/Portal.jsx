import reactDom from "react-dom";

const ModalPortal = ({ children }) => {
  const el = document.getElementById("modal");
  const bl = document.getElementById("modal2")
  return reactDom.createPortal(children, el);
};

export default ModalPortal;