import { Link } from "react-router-dom";

export default function NavItem({ DopenHandeler }) {
  return (
    <ul className="menu green-bor  align-items-center">
      <a href="#stat" class="black-bor " onClick={DopenHandeler}>
        <li className="blue-bor main-li">Statistics</li>
      </a>

      <a to="/test" class="black-bor">
        <li className="blue-bor main-li">Contact Us</li>
      </a>
      <a href="https://wa.me/+917870565464" className="black-bor">
        <li class="blue-bor main-li">About Us</li>
      </a>
      <a href="https://wa.me/+917870565464" className="black-bor">
        <li className="blue-bor main-li">Register</li>
      </a>
    </ul>
  );
}
