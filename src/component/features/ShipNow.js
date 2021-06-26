import React, { Component } from "react";
import Btn from "../common/Btn";

export default class ShipNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dateSelect: null,
      active: false,
    };
  }

  handleTimerOrder = () => {
    this.props.pushDataTime();
    this.setState({
      open: true,
    });
  };

  clickTimer = () => {
    let elementDate = document.getElementById("date");
    let elementTime = document.getElementById("time");
    this.props.setTextBtnShipNow(elementDate.value, elementTime.value);
    if (
      elementDate.value === this.props.dateNow &&
      elementTime.value === this.props.timeNow
    ) {
      this.setState({
        open: false,
        active:false
      });
    } else {
      this.setState({
        active: true,
      });
    }


  };

  getSelect = () => {
    let elementSelectDate = document.getElementById("date");
    this.setState({
      dateSelect: elementSelectDate.value,
    });
  };

  getShipNow = () => {
    this.props.setOpenDropDownTime();
    console.log(this.props.timeNow, this.props.dateNow);
  };

  render() {
    let { dataDate, dataTime, dateNow, timeNow, dateTimeDefault } = this.props;
    let { active, dateSelect, open } = this.state;
    return (
      <div className="delivery">
        <div className="delivery__button" onClick={this.getShipNow}>
          <i className=" delivery__icon far fa-clock"></i>
          <span>GIAO NGAY</span>
          {active === false && (
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="4,10 8,15 17,4"
              />
            </svg>
          )}
        </div>
        <div className={`delivery__button`} onClick={this.handleTimerOrder}>
          <i className=" delivery__icon far fa-calendar"></i>
          <span> Thời gian đặt hàng </span>
          {active === true && (
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="4,10 8,15 17,4"
              />
            </svg>
          )}
        </div>
        {open && (
          <div className="delivery__dropdown">
            <div className="delivery__dropdown-item">
              <label htmlFor="date">Ngày đặt</label>
              <select name="date" id="date" onChange={this.getSelect}>
                {dataDate.map((item, index) =>
                  item === dateNow ? (
                    dataTime.length !== 0 && (
                      <option key={index} value={item}>
                        HÔM NAY
                      </option>
                    )
                  ) : (
                    <option key={index} value={item}>
                      NGÀY {item}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="delivery__dropdown-item">
              <label htmlFor="time">Thời gian đặt</label>
              <select name="time" id="time">
                {dateSelect === null || dateSelect === dateNow ? (
                  <>
                    {dataTime.length !== 0 ? (
                      <>
                        <option value={timeNow}>GIAO 15-30 PHÚT</option>
                        {dataTime.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </>
                    ) : (
                      <>
                        {dateTimeDefault.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {dateTimeDefault.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>
            <Btn
              text="Hẹn giờ ngay"
              className="btn-orange btn-size-lager"
              onClick={this.clickTimer}
            />
          </div>
        )}
      </div>
    );
  }
}
