import React, { Component } from "react";

import logofooter from "../../image/logo_footer.png";
import logoSaleNoti from "../../image/logoSaleNoti.png";
import appstore from "../../image/appstore.png";
import google from "../../image/google-play-badge.png";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <div className="footer__widget-1">
                <img src={logofooter} alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="footer__widget-2">
                <div className=" footer__widget-2-about">
                  <h2 className="footer__widget-heading">Về chúng tôi </h2>
                  <span className="footer__widget-2-company">
                    Công ty cổ phần thương mại <br /> dịch cụ trà cà phê
                  </span>
                </div>
                <a href="/#">Điều khoản và điều kiện</a>
                <a href="/#">Chính sách bảo mật</a>
                <img src={logoSaleNoti} alt="" />
              </div>
            </div>
            <div className="col-3">
              <div className="footer__widget-3">
                <h2 className="footer__widget-heading">
                  Ứng dụng the caffee house
                </h2>
                <img src={appstore} alt="" />
                <img src={google} alt="" />
              </div>
            </div>
            <div className="col-4">
              <div className="footer__widget-4">
                <h2 className="footer__widget-heading">Hỗ trợ khách hàng</h2>
                <div className="footer__widget-4-address">
                  <a href="/#">Delivery: 1800 6936</a>
                  <a href="/#">Hotline: 02871 087 088</a>
                  <a href="/#">
                    Địa chỉ: Lầu 7, 62 Trần Quang Khải, phường Tân Định, quận 1,
                    HCMC
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__copyright">
            <a href="/#">
              © 2018 CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ TRÀ CÀ PHÊ VN
            </a>
            <a href="/#">86-88 Cao Thắng, phường 4, quận 3, Hồ Chí Minh</a>
            <a href="/#">
              Số giấy phép ĐKKD: 0312867172 do sở kế hoạch đầu tư TPHCM ngày
              23/07/2014
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
