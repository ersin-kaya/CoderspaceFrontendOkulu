import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      data-testid={props.id}
      className={props.className}
      style={props.styles}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  styles: PropTypes.object,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Button;
