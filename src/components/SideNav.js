function SideNav() {
  const menuList = [
    { label: "Cardiology" },
    { label: "Medical Gastroenterology" },
    { label: "Surgical Gastroenterology" },
    { label: "Surgical Oncology" },
    { label: "Gastroenterology" },
    { label: "General Medicine" },
    { label: "Nephrology" },
    { label: "Optometry" },
    { label: "Orthopedics" },
    { label: "Pediatrics" },
    { label: "Physiotherapy" },
    { label: "Surgical Oncology" },
    { label: "Surgical Oncology" },
    { label: "Surgical Oncology" },
    { label: "Surgical Oncology" },
    { label: "Orthopedics" },
    { label: "Orthopedics" },
    { label: "Pediatrics" },
    { label: "Physiotherapy" },
    { label: "Surgical Oncology" },
    { label: "Surgical Oncology" },
    { label: "Surgical Oncology" },
    { label: "Surgical Oncology" },
    { label: "Orthopedics" },
  ];
  return (
    <aside className="side-nav card">
      <h2 className="side-nav__header">Specialities</h2>
      <div style={{ position: "relative", marginTop: "2rem" }}>
        <input type="text" placeholder="Search" className="search-input" />
        <img
          src="images/search-icon.svg"
          width="18"
          height="16"
          alt="search icon"
          className="search-icon"
        />
      </div>
      <div className="list">
        {menuList.map((item, index) => (
          <div
            className={index === 0 ? "list__item active" : "list__item"}
            key={index}
          >
            <span>{item.label}</span>
            <span className="list__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15.941"
                height="13.511"
                viewBox="0 0 15.941 13.511"
              >
                <g transform="translate(22.441 20.834) rotate(180)">
                  <path
                    fill="none"
                    stroke="#208ce1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2px"
                    d="M21.441,18H7.5"
                    transform="translate(0 -3.922)"
                  />
                  <path
                    fill="none"
                    stroke="#208ce1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2px"
                    d="M12.841,18.183,7.5,12.841,12.841,7.5"
                    transform="translate(0 1.237)"
                  />
                </g>
              </svg>
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default SideNav;
