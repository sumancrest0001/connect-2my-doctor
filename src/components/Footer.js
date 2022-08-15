function TopNav() {
  return (
    <section className="footer-section">
      <div className="footer">
        <div className="footer__top">
          <div className="footer__left-section">
            <h2 className="footer__header">Download App</h2>
            <div className="footer__buttons">
              <li>
                <a href="https://xd.adobe.com/view/43a85eb0-d835-41c3-959c-f907d65c42f2-16fb/specs">
                  <img
                    src="images/playstore-footer.png"
                    alt="play store button footer"
                  />
                </a>
              </li>
              <li>
                <a href="https://xd.adobe.com/view/43a85eb0-d835-41c3-959c-f907d65c42f2-16fb/specs">
                  <img
                    src="images/appstore-footer.png"
                    alt="app store button footer"
                  />
                </a>
              </li>
            </div>
            <div className="footer__message">
              <h3 className="footer__sub-header">
                Connect2MyDoctor cannot be used in case of emergency
              </h3>
              <p>
                Connect2MyDoctor does not provide medical advice,
                <span>disagnosis, or treatment</span>
              </p>
            </div>
          </div>
          <div className="footer__right-section">
            <div className="footer__about">
              <h2 className="footer__right-header">Company</h2>
              <ul>
                <li>
                  <a href="http://localhost:3000/">About Us</a>
                </li>
                <li>
                  <a href="http://localhost:3000/">Partners</a>
                </li>
                <li>
                  <a href="http://localhost:3000/">Contacts</a>
                </li>
                <li>
                  <a href="http://localhost:3000/">Press</a>
                </li>
              </ul>
            </div>
            <div className="footer__testimonial">
              <ul>
                <li>
                  <a href="http://localhost:3000/">For Patients</a>
                </li>
                <li>
                  <a href="http://localhost:3000/">Testimonials</a>
                </li>
                <li>
                  <a href="http://localhost:3000/">For Doctors</a>
                </li>
              </ul>
            </div>
            <div className="footer__news">
              <h2 className="footer__right-header">News & Info</h2>
              <ul>
                <li>
                  <a href="http://localhost:3000/">Blog</a>
                </li>
                <li>
                  <a href="http://localhost:3000/">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="footer__connect-doctor">
              <div>
                <h2 className="footer__right-header">
                  Are you a leading doctor?
                </h2>
                <a
                  href={
                    "https://xd.adobe.com/view/43a85eb0-d835-41c3-959c-f907d65c42f2-16fb/specs/"
                  }
                  className={"footer__join-link"}
                >
                  Join Connect2MyDoctor today
                </a>
              </div>
              <div>
                <h2 className="footer__right-header">Follow Us On</h2>
                <div>
                  <img
                    className="footer__twitter-logo"
                    srcSet="images/twitter.png 1x, images/twitter@2x.png 2x"
                    alt="footer twitter icon"
                  />
                  <img
                    className="footer__facebook-logo"
                    srcSet="images/facebook.png 1x, images/facebook@2x.png 2x"
                    alt="footer facebook icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__horizontal-divider" />
        <div className="footer__bottom">
          <p>&copy; 2023 Connect2myDoctor All rights reserved.</p>
          <p>
            Privacy Policy<span className="vertical-divider">|</span>Terms of
            Use
          </p>
        </div>
      </div>
    </section>
  );
}

export default TopNav;
