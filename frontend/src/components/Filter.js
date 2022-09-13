const Filter = (props) => {
  const dateFilter = [
    "2022-08",
    "2022-07",
    "2022-06",
    "2022-05",
    "2022-04",
    "2022-03",
    "2022-02",
    "2022-01",
    "Before 2022",
  ];
  return (
    <div className="filter">
      <div className="filter-date">
        <h5>Filtered By Date</h5>
        {dateFilter.map((date, index) => (
          <a href="/" key={index}>
            {date}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Filter;
