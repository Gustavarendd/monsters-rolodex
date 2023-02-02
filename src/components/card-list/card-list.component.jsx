// import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monsters={monster} key={monster.id} />;
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monsters={monster} key={monster.id} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
