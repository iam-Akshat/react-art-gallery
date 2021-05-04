const { NavLink } = require('react-router-dom');

const BackNav = () => (
  <nav className="back_nav px-5 bg-primary">
    <NavLink to="/" className="link-light fs-4">&lt;Home</NavLink>
  </nav>
);

export default BackNav;
