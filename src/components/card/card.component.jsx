// import { Component } from "react";
import "./card.style.css";

const Card = ({ monsters }) => {
  const { id, name, email } = monsters;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//   render() {
//     const { name, email, id } = this.props.monsters;
//     return (
//       <div className="card-container">
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt="monster"
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
