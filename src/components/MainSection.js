import SideNav from "./SideNav";
import DoctorCard from "./DoctorCard";

function MainSection() {
  const filters = [
    { label: "By Name" },
    { label: "Gender" },
    { label: "Hospital" },
    { label: "Location" },
    { label: "Language" },
  ];

  return (
    <div className="main-container">
      <SideNav />
      <div className="main-section">
        <div className="filter-section card">
          <div className="filter-list">
            {filters.map((filter, index) => (
              <div>
                <div className="filter-item" key={index}>
                  <span className="filter-name">{filter.label}</span>
                  <span className="filter-down-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.397"
                      height="6.156"
                      viewBox="0 0 10.397 6.156"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5px"
                        d="M-16009.554,3919l4.086,4.345,4.191-4.345"
                        transform="translate(16010.613 -3917.938)"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="filter-reset">
            <span className="filter-reset__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12.872"
                height="12.888"
                viewBox="0 0 12.872 12.888"
              >
                <path
                  fill="#a7a7a7"
                  stroke="#a7a7a7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.8px"
                  d="M-42.476,190.125q0-.426,0-.851c0-.271,0-.542,0-.813,0-.191.1-.3.258-.3s.269.114.269.307q0,1.241,0,2.482c0,.028,0,.057-.007.091a.567.567,0,0,1-.086.013h-2.492c-.131,0-.253-.042-.281-.178a.338.338,0,0,1,.052-.261.383.383,0,0,1,.257-.094c.478-.009.956,0,1.434,0h.182a5.081,5.081,0,0,0-.928-.927,5.358,5.358,0,0,0-3.9-1.137,5.469,5.469,0,0,0-4.829,4.252,5.476,5.476,0,0,0,3.423,6.384,5.475,5.475,0,0,0,7.291-3.931,9.622,9.622,0,0,0,.142-1.177c.021-.207.1-.31.266-.309s.262.115.261.327a6.039,6.039,0,0,1-4.731,5.833,6.03,6.03,0,0,1-7.133-4.394,6.029,6.029,0,0,1,4.5-7.383,5.874,5.874,0,0,1,5.961,2.016l.055.064Z"
                  transform="translate(53.637 -187.492)"
                />
              </svg>
            </span>
            <span className="filter-reset__text">Reset Filter</span>
          </div>
        </div>
        <div className="doctor-section">
          <div className="doctor-list">
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
