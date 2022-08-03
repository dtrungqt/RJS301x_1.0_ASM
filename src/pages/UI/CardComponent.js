import "./CardComponent.css";
const Card = (props) => {
  const classes = `container-fluid container-color text-white ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
