function DoctorCard() {
  const doctorBio = [
    {
      topic: "MS, DNB, MRCS",
      subTopic: "Edinburgh",
    },
    {
      topic: "M.Ch",
      subTopic: "Endocrine Surgery",
    },
    {
      topic: "MNAMS, FACS",
      subTopic: "USA",
    },
    {
      topic: "FRCS",
      subTopic: "Glasgow",
    },
    {
      topic: "FRCS",
      subTopic: "England",
    },
  ];

  return (
    <div className="doctor-card card">
      <img
        className="doctor__profile"
        srcSet="images/doctor-profile.png 1x, images/doctor-profile@2x.png 2x"
        alt="doctor profile"
      />
      <div className="doctor__right-section">
        <div className="doctor__main-section">
          <div className="doctor__header">
            Dr. Alexandra mathew
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15.674"
                height="15.674"
                viewBox="0 0 15.674 15.674"
              >
                <g transform="translate(-493 -500)">
                  <g transform="translate(493 500)">
                    <path
                      fill="#208ce1"
                      d="M7.837,0A7.837,7.837,0,1,1,0,7.837,7.837,7.837,0,0,1,7.837,0Z"
                    />
                  </g>
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5px"
                    d="M3965.046-15665.668l2.2,2.2,3.978-3.979"
                    transform="translate(-3467.297 16173.298)"
                  />
                </g>
              </svg>
            </span>
          </div>
          <div className="doctor__sub-header">
            <span>Medical Cardiology</span>
            <span className="vertical-divider">|</span>
            <span>Experience: +10 Yrs</span>
            <span className="vertical-divider">|</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.342"
                height="13.826"
                viewBox="0 0 10.342 13.826"
              >
                <g transform="translate(0)">
                  <g transform="translate(0)">
                    <path
                      fill="#208ce1"
                      d="M10.342,5.168A5.184,5.184,0,0,0,5.366,0L5.3,0H5.235L5.168,0H5.035L4.97,0A5.176,5.176,0,0,0,0,5.168q0,.09,0,.18t0,.193A5.839,5.839,0,0,0,.092,6.582c0,.02.014.081.035.185A5.727,5.727,0,0,0,.473,7.86a15.421,15.421,0,0,0,4.468,5.879.347.347,0,0,0,.46,0A15.448,15.448,0,0,0,9.869,7.86a5.667,5.667,0,0,0,.346-1.093c.022-.1.032-.165.035-.185a6.1,6.1,0,0,0,.092-1.041c0-.065,0-.129,0-.194S10.342,5.228,10.342,5.168Zm-2.629.239a2.551,2.551,0,0,1-5.09,0q-.007-.091-.007-.182a2.552,2.552,0,0,1,5.1,0Q7.72,5.317,7.713,5.407Z"
                      transform="translate(0)"
                    />
                  </g>
                </g>
              </svg>
            </span>
            <span>Dubai</span>
          </div>
          <div className="horizontal-divider"></div>
          <div className="doctor__bio">
            {doctorBio.map((item, index) => (
              <span key={index} className={"doctor__bio-topic"}>
                {item.topic}{" "}
                <span
                  className={"doctor__bio-sub-topic"}
                >{`(${item.subTopic})`}</span>
                ,{" "}
              </span>
            ))}
          </div>
          <img
            srcSet="images/hospital-logo.png 1x, images/hospital-logo@2x.png 2x"
            alt={"hospital logo"}
            className={"doctor__hospital-logo"}
          />
        </div>
        <div className="doctor__cta-section">
          <div className="doctor__appointment-info">
            <p className="doctor__time">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.54"
                height="16.54"
                viewBox="0 0 16.54 16.54"
              >
                <g transform="translate(0.25 0.25)">
                  <path
                    fill="#208ce1"
                    stroke="#208ce1"
                    strokeWidth="0.5px"
                    d="M14.02,6a8.02,8.02,0,1,0,8.02,8.02A8.026,8.026,0,0,0,14.02,6Zm0,15.149a7.129,7.129,0,1,1,7.129-7.129A7.138,7.138,0,0,1,14.02,21.149Z"
                    transform="translate(-6 -6)"
                  />
                  <path
                    fill="#208ce1"
                    stroke="#208ce1"
                    strokeWidth="0.5px"
                    d="M23.891,12H23v5.347a.46.46,0,0,0,.129.316L25.8,20.336l.628-.628-2.54-2.544Z"
                    transform="translate(-15.426 -9.327)"
                  />
                </g>
              </svg>
              <span>Up to 15 min</span>
            </p>
            <p className="doctor__fee">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.509"
                  height="13.892"
                  viewBox="0 0 21.509 13.892"
                >
                  <g transform="translate(0.402 0.6)">
                    <rect
                      fill="none"
                      stroke="#208ce1"
                      strokeMiterlimit={10}
                      strokeWidth="1.2px"
                      strokeLineJoin="round"
                      width="20.309"
                      height="12.692"
                      transform="translate(0.197)"
                    />
                    <circle
                      fill="none"
                      stroke="#208ce1"
                      strokeMiterlimit={10}
                      strokeWidth="1.2px"
                      cx="2.3"
                      cy="2.3"
                      r="2.3"
                      transform="translate(8.052 4.046)"
                    />
                    <path
                      fill="none"
                      stroke="#208ce1"
                      strokeMiterlimit={10}
                      strokeWidth="1.2px"
                      d="M948.346,594.319s3.713.333,4.711-4.045"
                      transform="translate(-948.346 -590.273)"
                    />
                    <path
                      fill="none"
                      stroke="#208ce1"
                      strokeMiterlimit={10}
                      strokeWidth="1.2px"
                      d="M968.623,594.319s-3.714.333-4.711-4.045"
                      transform="translate(-948.346 -590.273)"
                    />
                    <path
                      fill="none"
                      stroke="#208ce1"
                      strokeMiterlimit={10}
                      strokeWidth="1.2px"
                      d="M948.346,599.16s3.713-.333,4.711,4.046"
                      transform="translate(-948.346 -590.273)"
                    />
                    <path
                      fill="none"
                      stroke="#208ce1"
                      strokeMiterlimit={10}
                      strokeWidth="1.2px"
                      d="M968.623,599.16s-3.714-.333-4.711,4.046"
                      transform="translate(-948.346 -590.273)"
                    />
                  </g>
                </svg>
              </span>
              <span>AUD 200</span>
            </p>
          </div>
          <div className="doctor__appointment-btn button">Book Appointment</div>
          <div className="doctor__profile-btn button">View Profile</div>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
