import React from "react";
import "./menuBar.css";
import { Button } from "antd";

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    //this.state {};
  }

  /*
    renderButtons(){
        this.props.buttons.map((element) => {
                return(
                    <Button>element</Button>
                )
        });
    }
    */

  render() {
    return (
      <div className="menu">
        <div className="ikona"> tu ikona codersCamp </div>

        {this.props.buttonsNames.map(buttonName => (
          <Button className="button">{buttonName}</Button>
        ))}
      </div>
    );
  }
}
