import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container dark">
      <div className="list-item row">
        <div className="col-12 col-sm-4">
          <h3>CUSTOMER SERVICES</h3>
          <ul>
            <li>
              <Link className="item-link" to="#">
                Help & Contact Us
              </Link>
            </li>
            <li>
              <Link className="item-link" to="#">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link className="item-link" to="#">
                Online Stores
              </Link>
            </li>
            <li>
              <Link className="item-link" to="#">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-sm-4">
          <h3>COMPANY</h3>
          <ul>
            <li>
              <Link className="item-link" to="#">
                What We Do
              </Link>
            </li>
            <li>
              <Link className="item-link" to="#">
                Available Services
              </Link>
            </li>
            <li>
              <Link className="item-link" to="#">
                Lastest Posts
              </Link>
            </li>
            <li>
              <Link className="item-link" to="#">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-sm-4">
          <h3>SOCIAL MEDIA</h3>
          <ul>
            <li>
              <Link className="item-link" to="#">
                Twitter
              </Link>
            </li>
            <li>
              <Link className="item-link" to="#">
                Instagram
              </Link>
            </li>
            <li>
              <Link className="item-link" to="#">
                Facebook
              </Link>
            </li>
            <li>
              <Link className="item-link" to="#">
                Pinterest
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
