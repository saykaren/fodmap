import React from "react";
import fodmapData from "../Data/Data";

class Searchable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      names: fodmapData.map((x) => x.gameName),
      data: fodmapData,
      searchTerm: "",
    };
  }

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  dynamicSearch = () => {
    return this.state.data.filter((name) =>
      name.gameName.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    return (
      <div className="searchable">
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.editSearchTerm}
          placeholder="Search for a name!"
        />
        <br></br>
        <h3>Foods</h3>

        <div className="dataList">
          {this.dynamicSearch().map((x) => (
            <div className="dataItem">
              {x.nintendoNumber}.{x.gameName}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Searchable;
