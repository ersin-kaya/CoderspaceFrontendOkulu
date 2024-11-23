import PropTypes from "prop-types";
import { useEffect } from "react";

function ListItem({ student, value }) {
  //   useEffect(() => {
  //     console.log("Test useEffect"); // komponent her çağrıldığında bir kez çalışıyor. StrictMode'u kapatmayı unutma!
  //   });
  useEffect(() => {
    console.log("Test useEffect"); // komponent her çağrıldığında bir kez çalışıyor.
    // ! StrictMode açık olduğunda geliştirme modunda iki kez çalışır
  }, []); // bir kez çalışması için boş bir dependency list ekliyoruz

  return (
    <li>
      {student} - {value}
    </li>
  );
}

ListItem.propTypes = {
  student: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default ListItem;
