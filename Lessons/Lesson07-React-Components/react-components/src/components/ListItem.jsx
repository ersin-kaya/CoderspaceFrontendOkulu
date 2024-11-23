import PropTypes from "prop-types";

function ListItem(props) {
  return <li>{props.student}</li>;
}

ListItem.propTypes = {
  student: PropTypes.string.isRequired,
};

export default ListItem;
