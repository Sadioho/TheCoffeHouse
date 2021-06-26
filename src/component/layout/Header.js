import React from "react";
import logo from "../../image/logo.png";
import location from "../../image/location.png";
import Btn from "../common/Btn";
import SearchInput from "../features/SearchInput";
import Address from "../common/Address";
import ShipNow from "../features/ShipNow";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAddress: [],
      searchAddress: "",
      openDropDownTime: false,
      openDropDownAddress: false,
      textBtnShipNow: "Giao Ngay",
      timeNow: null,
      dateNow: null,
      dataDate: [],
      dataTime: [],
      dateTimeDefault: [],
    };
    this.container = React.createRef();
    this.findAddress = React.createRef();
  }

  // debounes
  handleChangeAddress = (e) => {
    if (this.findAddress.current) {
      clearTimeout(this.findAddress.current);
    }
    this.findAddress.current = setTimeout(() => {
      this.Address(e.target.value);
    }, 400);

    this.setState({
      searchAddress: e.target.value,
      dataAddress: [],
      openDropDownAddress: true,
    });
  };

  handleOnclick = (value) => {
    this.setState({
      searchAddress: value,
      openDropDownAddress: false,
    });
  };

  Address = (e) => {
    fetch(
      `https://api.thecoffeehouse.com/api/v5/map/autocomplete?key=${e}&from=TCH-WEB`,
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "cache-control": "no-cache",
          pragma: "no-cache",
          "sec-ch-ua":
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "tch-app-version": "",
          "tch-device-id": "",
          "x-csrf-token": "XJVEF4AnLtZqcFJ87XeJaV1nJxGC5HrAkMy9QCHA",
          "x-requested-with": "XMLHttpRequest",
        },
        referrer: "https://order.thecoffeehouse.com/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "omit",
      }
    )
      .then((res) => res.json())
      .then((dataAdd) => {
        if (e.length > 3) {
          this.setState({
            dataAddress: dataAdd.addresses,
          });
        }
        // console.log(dataAdd);
      });
  };

  handleOpenDropDown = () => {
    this.setState((state) => {
      return {
        openDropDownTime: !state.openDropDownTime,
      };
    });
    this.setState({
      openDropDownAddress: false,
    });
  };

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        openDropDownTime: false,
        openDropDownAddress: false,
      });
    }
  };

  pushDataDate = () => {
    let arr = [];
    let dayNow = new Date();
    let nextDay = new Date();
    for (let i = 0; i < 3; i++) {
      nextDay.setDate(dayNow.getDate() + i);
      arr.push(
        nextDay.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
        })
      );
    }
    this.setState({
      dataDate: arr,
    });
  };

  pushDataTime = () => {
    let timeStart = new Date();
    let timeEnd = new Date();
    let arrTime = [];
    timeStart.setMinutes(timeStart.getMinutes() + 60 - timeStart.getMinutes());
    timeEnd.setHours(20);
    timeEnd.setMinutes(30);
    for (
      timeStart;
      timeStart <= timeEnd;
      timeStart.setMinutes(timeStart.getMinutes() + 15)
    ) {
      arrTime.push(
        timeStart.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }
    this.setState({
      dataTime: arrTime,
    });
  };

  setTextBtnShipNow = (date, time) => {
    if (time === this.state.timeNow && date === this.state.dateNow) {
      this.setState({
        textBtnShipNow: "GIAO NGAY",
      });
    } else {
      this.setState({
        textBtnShipNow: `${date}  ${time}`,
      });
    }
  };

  setDateTimeDefault = () => {
    let timeStart = new Date();
    let timeEnd = new Date();
    let arrTime = [];
    timeEnd.setHours(20);
    timeEnd.setMinutes(30);
    timeStart.setHours(7);
    timeStart.setMinutes(30);
    for (
      timeStart;
      timeStart <= timeEnd;
      timeStart.setMinutes(timeStart.getMinutes() + 30)
    ) {
      arrTime.push(
        timeStart.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }
    this.setState({
      dateTimeDefault: arrTime,
    });
  };

  setOpenDropDownTime = () => {
    this.setState({
      openDropDownTime: false,
      textBtnShipNow: "GIAO NGAY",
    });
  };

  handleForcus = () => {
    this.setState({
      openDropDownAddress: true,
      openDropDownTime: false,
    });
  };
  componentDidMount() {
    this.setDateTimeDefault();
    this.pushDataDate();
    document.addEventListener("mousedown", this.handleClickOutside);
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    let dateNow = dateTime.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
    });
    this.setState({
      timeNow: time,
      dateNow: dateNow,
    });
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    let {
      dataAddress,
      timeNow,
      textBtnShipNow,
      dateNow,
      dataDate,
      dataTime,
      dateTimeDefault,
      openDropDownTime,
      searchAddress,
    } = this.state;

    return (
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="header__logo">
                <img src={logo} alt="LOGO" />
              </div>
            </div>
            <div className="col">
              <div className="header__form" ref={this.container}>
                <Btn
                  className="button"
                  onClick={this.handleOpenDropDown}
                  text={textBtnShipNow}
                />
                {openDropDownTime && (
                  <ShipNow
                    setTextBtnShipNow={this.setTextBtnShipNow}
                    textBtnShipNow={textBtnShipNow}
                    dateNow={dateNow}
                    timeNow={timeNow}
                    dataDate={dataDate}
                    dataTime={dataTime}
                    pushDataTime={this.pushDataTime}
                    dateTimeDefault={dateTimeDefault}
                    setOpenDropDownTime={this.setOpenDropDownTime}
                  />
                )}

                <div className="header__input">
                  <img alt="#" className="header__icon" src={location} />
                  <SearchInput
                    placeholder="Nhập địa chỉ giao hàng"
                    type="text"
                    className="size-lager input-focus"
                    handleChange={this.handleChangeAddress}
                    value={searchAddress}
                    ref={this.findAddress}
                    onClick={this.handleForcus}
                  />

                  <div className="header__address ">
                    {this.state.openDropDownAddress ? (
                      dataAddress.length > 0 ? (
                        dataAddress.map((item, index) => (
                          <Address
                            key={index}
                            title={item.title_address}
                            description={item.full_address}
                            addressDesciption={() =>
                              this.handleOnclick(item.full_address)
                            }
                          />
                        ))
                      ) : (
                        <Address description="Không có dữ liệu" />
                      )
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="col btn-login">
              <Btn href="/#" text="Đăng nhập"></Btn>
              {this.props.totalAmount > 0 && (
                <div className="total_cart">
                  <p className="total_amount">{this.props.totalAmount}</p>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.3" cy="17.3" r="1.4" />
                    <circle cx="13.3" cy="17.3" r="1.4" />
                    <polyline
                      fill="none"
                      stroke="#000"
                      points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
