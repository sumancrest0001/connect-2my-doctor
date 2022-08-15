function TopNav() {
  return (
    <nav className="top-nav">
      <ul className="menu-section">
        <li>
          <img src="images/connect-logo.png" alt="connect to doctor logo" />
        </li>
        <li>
          <span className="active">Specialities</span>
        </li>
        <li>
          <span>About Us</span>
        </li>
        <li>
          <span>For patients</span>
        </li>
        <li>
          <span>For Doctors</span>
        </li>
        <li>
          <span>Contact Us</span>
        </li>
      </ul>
      <ul className="button-section">
        <li>
          <a href="https://xd.adobe.com/view/43a85eb0-d835-41c3-959c-f907d65c42f2-16fb/specs">
            <img src="images/signup-button.png" alt="sign in/up button" />
          </a>
        </li>
        <li>
          <a href="https://xd.adobe.com/view/43a85eb0-d835-41c3-959c-f907d65c42f2-16fb/specs">
            <img src="images/playstore-logo.png" alt="play store button" />
          </a>
        </li>
        <li>
          <a href="https://xd.adobe.com/view/43a85eb0-d835-41c3-959c-f907d65c42f2-16fb/specs">
            <img src="images/appstore-logo.png" alt="app store button" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
