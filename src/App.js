import React, { Component } from "react";
import Header from "./component/layout/Header";
import Body from "./component/layout/Body";
import Footer from "./component/layout/Footer";
// import PlacehoderLoading from "./component/placehoders/PlacehoderLoading";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: 0,
    };
  }
  setTotalAmount = (data) => {
    this.setState({
      totalAmount: data,
    });
  };
  render() {
    return (
      <div>
        <Header totalAmount={this.state.totalAmount} />
        <Body setTotalAmount={this.setTotalAmount} />
        <Footer />
      </div>
    );
  }
}

export default App;
