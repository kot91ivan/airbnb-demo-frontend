import React from "react";
import FilterButton from "./index";

class Dropdown extends React.Component {
  state = {
    isOpen: false
  };

  toggler = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  render() {
    return (
      <div>
        <FilterButton onClick={this.toggle}>Dates</FilterButton>
        {this.state.isOpen && <div>My content</div>}
      </div>
    );
  }
}

export default Dropdown;
