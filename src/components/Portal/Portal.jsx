import reactDom from "react-dom";

const MPortal = ({ child }) => {
  const bl = document.getElementById("modal2");
  return reactDom.createPortal(child, bl);
};

export default MPortal;