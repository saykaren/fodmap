import React from "react";

class Searchable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        data: props.data,
        title: props.title,
        className: props.className,
        searchTerm: "",
    }
  }

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  dynamicSearch = () => {
    return this.state.data.filter((name) =>
      name.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    return (
      <div className={`${this.state.className} searchable`}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.editSearchTerm}
          placeholder={`Search ${this.state.className} foods`}
        />
        <div className={`${this.state.className}_title`}>{this.state.title}</div>
        <div className={`${this.state.className} dataList`}>
          {this.dynamicSearch().map((x) => (
            <div className={`${this.state.className}_dataItem`}>
              {x.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Searchable;
