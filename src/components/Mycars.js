import React, { Component, Fragment } from "react";
import Car from "./Cars";

class Mycars extends Component {
  state = {
    voitures: [
      { name: "Ford", color: "Red", year: 2000 },
      { name: "Mercedes", color: "Black", year: 2010 },
      { name: "Peugeot", color: "Green", year: 2018 },
    ],
    titre: "Mon catalogue voitures 2",
  };

  addTenYears = () => {
    const updateState = this.state.voitures.map((param) => {
      return (param.year -= 10);
    });

    this.setState({
      updateState,
    });
  };

  render() {
    const year = new Date().getFullYear();

    return (
      <>
        <h1>{this.state.titre}</h1>
        <button onClick={this.addTenYears}>+10 ans</button>

        <table className="carsTable">
          <tr>
            <th>Marque</th>
            <th>Age</th>
            <th>Couleur</th>
          </tr>
          {this.state.voitures.map((voiture, index) => {
            return (
              <Fragment key={index}>
                <Car
                  name={voiture.name}
                  color={voiture.color}
                  year={year - voiture.year + " ans"}
                />
              </Fragment>
            );
          })}
        </table>
      </>
    );
  }
}

export default Mycars;
